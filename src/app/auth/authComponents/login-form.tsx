"use client"
import {CardWrapper} from "@/src/app/auth/authComponents/card-wrapper";

import {Button, Link, TextField} from "@radix-ui/themes";

import {useState, useTransition} from "react";

import {useForm} from "react-hook-form";
import {LoginSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../../components/form/form"

import styles from "./authComponents.module.scss";
import {useSearchParams} from "next/navigation";

import FormError from "@/src/app/components/formError-success/form-error";
import FormSuccess from "@/src/app/components/formError-success/form-success";
import {login} from "@/actions/login";
//import Link from "next/link";


export const LoginForm = () => {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
        ? "Email already in use with different provider!"
        : "";

    const [showTowFactor, setShowTowFactor] = useState(false);
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

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {

        setError("");
        setSuccess("");

        startTransition(() => {
            login(values)
                .then((data) => {
                    if (data?.error) {
                        form.reset();
                        setError(data.error);
                    }
                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success)
                    }
                    if (data?.twoFactor) {
                        setShowTowFactor(true);
                    }
                })
                .catch(() => setError("Something went wrong!"))
        })
    }

    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Create an account"
            backButtonHref="/auth/register"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}

                >
                    <div >
                        {showTowFactor && (
                            <FormField
                                control={form.control}
                                name="code"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel >
                                            Two Factor Code
                                        </FormLabel>
                                        <FormControl>

                                            <TextField.Input
                                                {...field}
                                                placeholder="123456"
                                                disabled={isPending}
                                            />

                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>

                                )}

                            />
                        )}
                        {!showTowFactor && (<>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>
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

                                    )}

                                />
                                <FormField
                                    control={form.control}
                                    disabled={isPending}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>
                                                Password
                                            </FormLabel>
                                            <FormControl>
                                                <TextField.Input {...field} placeholder="******" type="password"/>
                                            </FormControl>

                                            <Link href="/auth/reset">
                                                Forgot password?
                                            </Link>

                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}
                    </div>
                    <FormError message={error}/> {/*|| rulError*/}
                    <FormSuccess message={success}/>
                    <Button className={styles.LoginButtonLoginForm} type="submit" size="2" disabled={isPending}>
                        {showTowFactor ? "Confirm" : "Login"}
                    </Button>
                </form>
            </Form>
        </CardWrapper>

    )
}