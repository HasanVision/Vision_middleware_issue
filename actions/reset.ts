"use server"

import * as z from "zod";
import {ResetSchema} from "@/schemas";

import {getUserByEmail} from "@/data/user";

import { SendPasswordResetEmail} from "@/src/lib/mail";
import { generatePasswordResetToken} from "@/src/lib/tokens";




export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const ValidatedFields = ResetSchema.safeParse(values);

    if (!ValidatedFields.success) {
        return{error: "Invalid email!"}
    }

    const { email } = ValidatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return {error: " Email not found!"}
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    await SendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token,
    )

    return {success: "Reset email sent!"}

}
