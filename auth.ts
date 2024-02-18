import NextAuth from "next-auth"
import { PrismaAdapter} from "@auth/prisma-adapter";
import { getUserById } from "@/data/user";
import authConfig from "./auth.config";
import {db} from "./src/lib/db";

import { getTwoFactorConfirmationByUserId} from "@/data/two-factor-confirmation";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({

    events: {
        async linkAccount({user}) {
            await db.user.update({
                where: {id: user.id || ''},
                data: {emailVerified: new Date()}
            })
        }
    },

    callbacks:{
        async signIn({ user, account} ) {
            if (account?.provider !== "credentials") {
                return true;
            }

            const existingUser = await getUserById(user.id?? '')
               // Prevent sign in without email verification
            if (!existingUser?.emailVerified) {
                return false;


            }
            if (existingUser.isTwoFactorEnabled) {
               const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);


               console.log({twoFactorConfirmation})


            if (!twoFactorConfirmation) return false;

               await db.twoFactorConfirmation.delete({
                   where: {id: twoFactorConfirmation.id}
               });
            }


            return true;
        },

        async session({ token, session}) {
            console.log({sessionToken: token, session,})
            if( token.sub && session.user) {
            session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role as "ADMIN" | "USER";
            }
          return session;
        },
      async jwt({ token}) {
            if (!token.sub)
                return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.role = existingUser.role;

          return token;
      }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt"},
    ...authConfig,
    // providers: [GitHub],
})