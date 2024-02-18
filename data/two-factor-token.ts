

import {db} from "@/src/lib/db";


export const getTwoFactorTokenByToken = async (token: string) => {
    try {
        const twoFactoToken = await db.twoFactorToken.findUnique({
            where: { token }
        })

        return twoFactoToken;
    } catch {
        return null;
    }
}


export const getTwoFactorTokenByEmail = async (email: string) => {
    try {
        const twoFactoToken = await db.twoFactorToken.findFirst({
            where: { email }
        })

        return twoFactoToken;
    } catch {
        return null;
    }
}