"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.scss";

interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: string | number;
    };
    email: string;
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userStr = localStorage.getItem("user");
            if (!userStr) {
                router.push("/auth");
            } else {
                const userObj = JSON.parse(userStr);
                setUser(userObj);
            }
        }
    }, []);

    if (!user) return null;

    return (
        <div className={styles.dashboard}>
            <h1>Welcome to the Dashboard 🎉</h1>
            <div className={styles.card}>
                <img src={user.picture.large} alt="User" />
                <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Location:</strong> {`${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
            </div>
        </div>
    );
}
