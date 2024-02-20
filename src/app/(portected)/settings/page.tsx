"use client"

import styles from "../settings.module.css"
import {logout} from "@/actions/logout";
import {useCurrentUser} from "@/hooks/use-current-user";
import {Container} from "@radix-ui/themes";
import {CardWrapper} from "@/src/app/auth/authComponents/card-wrapper";

const SettingsPage = () => {

    const user = useCurrentUser();

    const onClick = () => {
        logout();
    }

    return (
        <div >
                <button onClick={onClick} type="submit">
                    Sign out
                </button>

        </div>
    )
}

export default SettingsPage;