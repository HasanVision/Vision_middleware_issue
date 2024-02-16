"use client"
import {CardWrapper} from "@/src/app/components/auth/card-wrapper";

import {Button} from "@radix-ui/themes";

import {useState, useTransition} from "react";

import { useForm } from "react-hook-form";
import { LoginSchema} from "@/schemas";
import { zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "../form/form"

import styles from "./authStyles.module.scss";

import {TextField} from "@radix-ui/themes";

import FormError from "@/src/app/components/formError-success/form-error";
import FormSuccess from "@/src/app/components/formError-success/form-success";
import {login} from "@/actions/login";



export const LoginForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = (values : z.infer<typeof LoginSchema>) => {

        setError("");
        setSuccess("");

        startTransition(() =>{
            login(values)
                .then ((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                })
        })
    }

    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="New to VisionX? Creacte and account"
            backButtonHref="/register"
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
                       <FormField
                           control={form.control}
                           disabled={isPending}
                           name="password"
                           render={({ field}) => (
                               <FormItem>
                                   <FormLabel>
                                       Password
                                   </FormLabel>
                                   <FormControl>
                                       <TextField.Input {...field} placeholder="******" type="password"/>
                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>
                           ) }
                       />
                   </div>
                   <FormError message={error}/>
                   <FormSuccess message={success}/>
                   <Button className={styles.LoginButton} type="submit" size="2"  disabled={isPending} >
                       Login
                   </Button>
               </form>
           </Form>
        </CardWrapper>

    )
}