

import styles from "./authStyles.module.scss"


interface  HeaderProps {
    label: string;
};

export const Header = ({
    label,
                       } : HeaderProps) => {
return (
    <div  className={styles.authHeader}
    >
        <h1>
            🔐 Auth
        </h1>
        <p>
            {label}
        </p>

    </div>
)
}