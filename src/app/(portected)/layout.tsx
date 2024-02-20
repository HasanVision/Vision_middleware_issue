
import styles from "./settings.module.css"
import {NavbarSettings} from "@/src/app/(portected)/_components/navbarSettings";


interface ProtectedLayoutProps  {
    children: React.ReactNode;
}



const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
    return(
        <div>
        <NavbarSettings/>
        <div className={styles.ProtectedLayoutStyle}>

            {children}
        </div>
        </div>
    )
}

export default ProtectedLayout;