import React from "react";
import {Footer} from "@/src/app/(landingpage)/_components/footer";

import styles from "./auth.module.scss"

const LoginLayout = ({
    children
} : {
    children: React.ReactNode;
}) => {
    return(
          <div className={styles.authLayout}>
            {children}
              <Footer/>
        </div>
      )

}

export default LoginLayout;