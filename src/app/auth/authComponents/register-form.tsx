"use client"
import {CardWrapper} from "@/src/app/auth/authComponents/card-wrapper";

import {Button} from "@radix-ui/themes";

import {useState, useTransition} from "react";

import { useForm } from "react-hook-form";
import {LoginSchema, RegisterSchema} from "@/schemas";
import { zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "../../components/form/form"

import styles from "./authComponents.module.scss";

import {Text, TextField} from "@radix-ui/themes";

import FormError from "@/src/app/components/formError-success/form-error";
import FormSuccess from "@/src/app/components/formError-success/form-success";
import {register} from "@/actions/register";


export const RegisterForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        }
    })

    const onSubmit = (values : z.infer<typeof RegisterSchema>) => {

        setError("");
        setSuccess("");

        startTransition(() =>{
            register(values)
                .then ((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }

    return (
        <CardWrapper
            headerLabel="Create an acount"
            backButtonLabel="Already have an accout? Login"
            backButtonHref="/auth/login"
        >
           <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)}

               >
                   <div    >
                       <FormField
                           control={form.control}
                           name="name"
                           render={({ field}) => (
                               <FormItem >
                                   <FormLabel >
                                       Name
                                   </FormLabel>
                                   <FormControl>

                                       <TextField.Input
                                           {...field}
                                       //    placeholder="Your name"
                                           disabled={isPending}
                                       />

                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>

                           ) }

                       />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field}) => (
                            <FormItem >
                                <FormLabel >
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

                   <Button className={styles.LoginButtonLoginForm} type="submit" size="2"  disabled={isPending} >
                       Create an account
                   </Button>

               </form>
           </Form>
        </CardWrapper>

    )
}