"use client";

import { useRouter } from "next/navigation";
 import styles from "./home.module.scss";
import Button from "./components/Button";

export default function HomePage() {
  const router = useRouter();

  const goToAuth = () => {
    router.push("/auth");
  };

  return (
    <div className={styles.home}>
      <h1>خوش آمدید!</h1>
      <Button onClick={goToAuth}>برو به صفحه ورود</Button>
    </div>
  );
}
