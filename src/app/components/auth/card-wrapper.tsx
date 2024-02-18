"use client"

import styles from "./authStyles.module.scss"

import {Card, Container, Box} from "@radix-ui/themes";
import {Header} from "@/src/app/components/auth/header";
import {BackButton} from "@/src/app/components/auth/back-button";
import React from "react";

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
} : CardWrapperProps) => {
 return (
     <div>


     <Card  className = {styles.cardWrapperContainer}
     >
         <Box >
            <Header label={headerLabel}/>
         </Box>
     </Card>
     <Card>
         <Box>
             {children}
         </Box>
     </Card>
         <Card className={styles.RegisterCard}>
             <Box >
                 <div className={styles.RegisterCard}>

                     <BackButton

                         href={backButtonHref} label={backButtonLabel}>

                     </BackButton>
                 </div>

             </Box>
         </Card>


     </div>

 )
}