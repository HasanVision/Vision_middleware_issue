import Link from "next/link";
import Image from "next/image"

import styles from "./logo.module.scss";

export const Logo = () => {
    return(
        <Link href="/public">
            <div className={styles.logo} >
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    height={30}
                    width={30}


                />
            </div>
        </Link>
    )
}