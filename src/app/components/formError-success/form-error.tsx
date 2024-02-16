
import  { AlertTriangle } from "lucide-react";

import {Text, Callout} from "@radix-ui/themes";

import styles from "./form-error-success.module.css";
interface FormErrorProps {
    message?: string;
};

const FormError = ({
    message,}: FormErrorProps) => {
    if (!message) return null;


    return(

            <Callout.Root className={styles.FormError} color="red" role="alert">
                    <AlertTriangle height="26" width="26"/>
                <Callout.Text>
                    <Text>{message}</Text>
                </Callout.Text>
            </Callout.Root>

    )
}

export default FormError;