"use client"
import {CardWrapper} from "@/src/app/components/auth/card-wrapper";

import {Button, Link} from "@radix-ui/themes";

import {useState, useTransition} from "react";

import { useForm } from "react-hook-form";
import { ResetSchema } from "@/schemas";
import { zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "../form/form"

import styles from "./authStyles.module.scss";

import {TextField} from "@radix-ui/themes";

import FormError from "@/src/app/components/formError-success/form-error";
import FormSuccess from "@/src/app/components/formError-success/form-success";
import {reset} from "@/actions/reset";




export const ResetForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",

        }
    })

    const onSubmit = (values : z.infer<typeof ResetSchema>) => {

        setError("");
        setSuccess("");

        startTransition(() =>{
            reset(values)
                .then ((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                })
        })
    }

    return (
        <CardWrapper
            headerLabel="Forgot you password"
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
                            name="email"
                            render={({ field}) => (
                                <FormItem >
                                    <FormLabel className={styles.formInput}>
                                        Email
                                    </FormLabel>
                                    <FormControl>

                                        <TextField.Input
                                            {...field}
                                            placeholder="Enter you email"
                                            type="email"
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
                        Send reset email
                    </Button>
                </form>
            </Form>
        </CardWrapper>

    )
}