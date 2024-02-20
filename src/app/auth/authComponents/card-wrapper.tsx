"use client"

import {Header} from "@/src/app/auth/authComponents/header";
import {BackButton} from "@/src/app/auth/authComponents/back-button";
import React from "react";

import styles from "./authComponents.module.scss"

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
}


export const CardWrapper = ({
                                children,
                                headerLabel,
                                backButtonLabel,
                                backButtonHref,
                            }: CardWrapperProps) => {
    return (


        <div className={styles.cardWrapperContainer}>
            <div className={styles.cardWrapperHeader}>
                <Header label={headerLabel}/>
            </div>
            <div className={styles.cardWrapperChildren} >
                {children}
            </div>
            <div >

                <BackButton
                    href={backButtonHref} label={backButtonLabel}>
                </BackButton>
            </div>
        </div>


    )
}