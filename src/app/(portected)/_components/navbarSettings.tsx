"use client"
import styles from "./settingsNavebar.module.css"

import {Button, Link} from "@radix-ui/themes"
import {usePathname} from "next/navigation";
import {UserButton} from "@/src/app/auth/authComponents/user-button";

//import {Button} from "@radix-ui/themes"
export const NavbarSettings = () => {

    const pathname = usePathname();
    return (
<div className={styles.Navbar}>
        <nav className={styles.Navbar}  >
            <div>
                <Button asChild variant={pathname === "/settings" ? "classic" : "outline"}>
                    <Link href="/settings">
                        Settings
                    </Link>
                </Button>
                <Button asChild variant={pathname === "/server" ? "classic" : "outline"}>
                    <Link href="/server">
                        Server
                    </Link>
                </Button>
                <Button asChild variant={pathname === "/client" ? "classic" : "outline"}>
                    <Link href="/client">
                        Client
                    </Link>

                </Button>

                <Button asChild variant={pathname === "/admin" ? "classic" : "outline"}>
                    <Link href="/admin">
                        Admin
                    </Link>
                </Button>
            </div>
            <div>
                <UserButton/>
            </div>
        </nav>
</div>
    )
}

