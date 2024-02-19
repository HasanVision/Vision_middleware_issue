


"use server"

import {signOut} from "@/auth"

export const logout = async () => {

    // If you want to do server operation... much check later.
    await signOut();
}