"use client"
import {CardWrapper} from "@/src/app/auth/authComponents/card-wrapper";

import {Button, Link} from "@radix-ui/themes";

import {useState, useTransition} from "react";

import { useForm } from "react-hook-form";
import { NewPasswordSchema } from "@/schemas";
import { zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "../../components/form/form"

import styles from "./authComponents.module.scss";

import {TextField} from "@radix-ui/themes";

import FormError from "@/src/app/components/formError-success/form-error";
import FormSuccess from "@/src/app/components/formError-success/form-success";
import {newPassword} from "@/actions/new-password";

import {useSearchParams} from "next/navigation";


export const NewPasswordForm = () => {

    const searchParam = useSearchParams();
    const token = searchParam.get("token")

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",

        }
    })

    const onSubmit = (values : z.infer<typeof NewPasswordSchema>) => {

        setError("");
        setSuccess("");

        startTransition(() =>{
            newPassword(values, token)
                .then ((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                })
        })
    }

    return (
        <CardWrapper
            headerLabel="Enter a new password"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                      className={styles.FormNative}
                >
                    <div  className={styles.formInput}  >
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field}) => (
                                <FormItem >
                                    <FormLabel className={styles.formInput}>
                                        Password
                                    </FormLabel>
                                    <FormControl>

                                        <TextField.Input
                                            {...field}
                                            placeholder="******"
                                            type="password"
                                            disabled={isPending}
                                        />

                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>

                            ) }

                        />

                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button className={styles.LoginButton} type="submit" size="2"  disabled={isPending} >
                        Reset password
                    </Button>
                </form>
            </Form>
        </CardWrapper>

    )
}