"use client"

import {Button} from "@radix-ui/themes"

import Link from "next/link";

import styles from "./authStyles.module.scss";

interface BackButtonProps {
    href: string;
    label: string;
}

export const BackButton = ({
    href,
    label,
                           } : BackButtonProps) => {
    return(
        <div className={styles.RegisterButton} >
            <Button variant="ghost" size="2" asChild={true}>
                <Link href={href}>
                    {label}
                </Link>
            </Button>
        </div>

    )
}