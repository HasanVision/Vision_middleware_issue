import React from "react";
import {Footer} from "@/src/app/(landingpage)/_components/footer/footer";

const LoginLayout = ({
    children
} : {
    children: React.ReactNode;
}) => {
    return(
          <div>
            {children}
              <Footer/>
        </div>
      )

}

export default LoginLayout;