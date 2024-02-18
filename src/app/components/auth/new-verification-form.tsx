"use client"

import styles from "./authStyles.module.scss";

import {useCallback, useEffect, useState} from "react";

import {CardWrapper} from "@/src/app/components/auth/card-wrapper";
import { useSearchParams} from "next/navigation";
import { BeatLoader} from "react-spinners";
import { newVerification} from "@/actions/new-verification";

import FormError from "@/src/app/components/formError-success/form-error"
import  FormSuccess from "@/src/app/components/formError-success/form-success"

export const NewVerificationForm  =() => {

    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const onSubmit =  useCallback(()=> {
        if (!token) {
            setError("Missing Token")
            return;
        }

        newVerification(token)
            .then((data) =>{
                setSuccess(data.success);
                setError(data.error);
            })

            .catch(() => {
            setError("Something went wrong!")
    })
    },[token]);

    useEffect(()=>{
        onSubmit();
    }, [onSubmit]);

    return(
        <CardWrapper
            headerLabel="Confirming your verification"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login">
                <div className={styles.reactSpinner}>
                    {!success && !error && (
                        <BeatLoader/>
                    )}

                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                </div>
        </CardWrapper>
    )
}