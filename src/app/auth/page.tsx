"use client";

import styles from "./auth.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function AuthPage() {
    const router = useRouter();
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const validatePhone = (phone: string) => {
        const regex = /^09\d{9}$/;
        return regex.test(phone);
    };

    const handleLogin = async () => {
        if (!validatePhone(phone)) {
            setError("شماره موبایل معتبر نیست");
            return;
        }

        try {
            const res = await fetch(
                "https://randomuser.me/api/?results=1&nat=us"
            );
            const data = await res.json();
            localStorage.setItem("user", JSON.stringify(data.results[0]));
            router.push("/dashboard");
        } catch (err) {
            console.error(err);
            setError("مشکلی پیش آمده است.");
        }
    };

    return (
        <div className={styles.auth}>
            <div className={styles.card}>
                <h1>صفحه ورود</h1>
                <Input
                    value={phone}
                    onChange={setPhone}
                    placeholder="شماره موبایل ایران"
                    type="tel"
                />
                {error && <span className={styles.error}>{error}</span>}
                <Button onClick={handleLogin}>ورود</Button>
            </div>
        </div>
    );
}
