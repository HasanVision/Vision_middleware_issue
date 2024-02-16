import React from "react";
import {Footer} from "@/src/app/(landingpage)/_components/footer/footer";
import {Navbar} from "@/src/app/(landingpage)/_components/navbar/navbar";

const RegisterLayout = ({
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

export default RegisterLayout;