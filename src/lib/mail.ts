




import {Resend} from "resend";


export const sendTwoFactorTokenEmail = async (email: string, token: string) =>{
//    const twoFactorLink = `http://localhost:3000/auth/two-factor?token=${token}` hhhh because they have to enter the number...

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Two factor confirmation",
        html: `<p> Your confirmation code: ${token} </p>`
    })
}





const resend = new Resend(process.env.RESEND_API_KEY);

export const SendPasswordResetEmail = async (email: string, token: string) => {
    const ResetLink = `http://localhost:3000/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset password",
        html: `<p>Click <a href="${ResetLink}"> here </a> Reset your password. </p>`
    })
}


export const sendVerificationEmail = async (email: string, token: string) =>{


    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;


    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}"> here </a> to confirm email. </p>`
    });
};