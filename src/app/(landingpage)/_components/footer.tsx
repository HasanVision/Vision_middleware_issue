import styles from "./navbar.module.scss";
import {Logo} from "@/src/app/components/logo/logo";
import {Button} from "@radix-ui/themes";


export const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div>
                <Logo/>
                <div>
                    <Button variant="ghost">
                        privacy policy
                    </Button>
                    <Button variant="ghost">
                        Terms of service </Button>
                </div>
            </div>
        </div>
    )
}


