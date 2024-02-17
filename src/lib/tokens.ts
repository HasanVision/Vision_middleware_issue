import {v4 as uuidv4} from "uuid";

import {db} from "@/src/lib/db";
import {getVerificationTokenByToken as getVerificationTokenByEmail} from "@/data/verificationToken";

export const generateVerificationToken = async (email: string) => {

    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000)  // the token will expire in 1 hour.


    const existingToken = await getVerificationTokenByEmail(email);
    if (existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }

    return db.verificationToken.create({
        data: {
            email,
            token,
            expires
        }
    });
}