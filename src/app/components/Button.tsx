import styles from "./Button.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}
