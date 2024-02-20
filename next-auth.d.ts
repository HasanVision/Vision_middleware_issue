// import NextAuth, { type DefaultSession} from "next-authComponents";
//
// declare module "@authComponents/core" {
//     interface Session {
//         user: {
//             role: "ADMIN" | "USER"
//         } & DefaultSession["user"]
//     }
// }




import NextAuth, { type DefaultSession } from "next-auth";
import {UserRole} from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
    //  customField: string;  To add anything to session.user....."
    role: UserRole;
};

declare module "next-auth" {
    interface Session {
        user: ExtendedUser
    }
}