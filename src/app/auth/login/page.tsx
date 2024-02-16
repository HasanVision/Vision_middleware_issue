
import styles from "./page.module.scss";
import {Button} from "@radix-ui/themes";
import {LoginButton} from "@/src/app/components/auth/login-button";
import {LoginForm} from "@/src/app/components/auth/login-form";





const LoginPage = () => {
    return (
        <main  className={styles.LoginMain}>
                <LoginForm/>
        </main>
    )
}

export default LoginPage;