import styles from "./Input.module.scss";

interface InputProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
    type?: string;
}

export default function Input({ value, onChange, placeholder, type = "text" }: InputProps) {
    return (
        <input
            className={styles.input}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
        />
    );
}
