
import styles from "./page.module.css"


interface ProtectedLayoutProps  {
    children: React.ReactNode;
}



const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
    return(
        <div className={styles.ProtectedLayoutStyle}>
            {children}
        </div>
    )
}

export default ProtectedLayout;