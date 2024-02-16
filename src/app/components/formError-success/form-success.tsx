
import  {  CheckSquare } from "lucide-react";

import {Text, Callout} from "@radix-ui/themes";

import styles from "./form-error-success.module.css";
interface FormSuccessProps {
    message?: string;
}

const FormSuccess = ({
    message}: FormSuccessProps) => {
    if (!message) return null;


    return(

            <Callout.Root className={styles.FormSuccess} color="green" >
                    <CheckSquare height="26" width="26"/>
                <Callout.Text>
                    <Text>{message}</Text>
                </Callout.Text>
            </Callout.Root>

    )
}

export default FormSuccess;