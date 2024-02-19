import {db} from "@/src/lib/db";


export const getTwoFactorConfirmationByUserId = async (userId: string) => {
    try {

        return await db.twoFactorConfirmation.findUnique({
            where: {userId}
        });
    } catch {
        return null;
    }
}