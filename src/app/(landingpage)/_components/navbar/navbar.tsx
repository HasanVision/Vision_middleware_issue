
import styles from "./navbar.module.scss";
import {Logo} from "@/src/app/components/logo/logo";
import {Button} from "@radix-ui/themes";

import Link from "next/link"


export const Navbar = () => {
    return (
        <div className={styles.Navbar} >
            <div>
                <Logo/>
                <div >
                    <Button variant="outline">
                        <Link href="/auth/login">
                            Login
                        </Link>

                    </Button>
                    <Button  asChild={true}  >
                        <Link href="/auth/register">
                            Join the community
                        </Link>

                    </Button>
                </div>
            </div>
        </div>
    )
}


