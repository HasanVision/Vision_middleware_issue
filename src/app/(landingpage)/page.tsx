

import styles from "./page.module.scss";
import {Medal} from "lucide-react";

import {Button, Flex, Box} from "@radix-ui/themes";
import Link from "next/link";
const LandingPage = () => {
    return(
        <div className={styles.landingpage}>
            <div >
                <div >
                    <Medal className={styles.medal}/>
                    No 1 Content Creators Choice
                </div>
            </div>
            <div>
                <Button
                        size="1" asChild={true}>
                    <Link href="/sign-up">
                        geeeeet Taskify
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default LandingPage;