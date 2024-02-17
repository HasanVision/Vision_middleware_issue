
import styles from "./page.module.scss";
import {Button} from "@radix-ui/themes";

import { RegisterForm } from "@/src/app/components/auth/register-form";

const RegisterPage = () => {
    return (
        <main  className={styles.LoginMain}>
                <RegisterForm/>
        </main>
    )
}

export default RegisterPage;