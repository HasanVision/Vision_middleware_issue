"use client"

import {Button} from "@radix-ui/themes"

import {Link} from "@radix-ui/themes";

import styles from "./authComponents.module.scss";

interface BackButtonProps {
    href: string;
    label: string;
}

export const BackButton = ({
    href,
    label,
                           } : BackButtonProps) => {
    return(

<div className={styles.backButton}>
    <Link  href={href}>
        {label}
    </Link>
</div>




    )
}