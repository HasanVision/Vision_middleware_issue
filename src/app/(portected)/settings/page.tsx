"use client"

import styles from "./page.module.css"
import {useSession} from "next-auth/react";
import {logout} from "@/actions/logout";
import {useCurrentUser} from "@/hooks/use-current-user";
import {Navbar} from "@/src/app/(portected)/_components/navbar";

const SettingsPage=   () => {

    const user = useCurrentUser();

const onClick = () => {
    logout();
}

    return(
        <div className={styles.ProtectedLayoutStyle}>
            <Navbar/>
                <button onClick={onClick} type="submit">
                    Sign out
                </button>
        </div>
    )
}

export default SettingsPage;