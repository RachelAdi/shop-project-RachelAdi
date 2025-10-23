"use client";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/Hadasim_LOGO_org.png" alt="Shop Logo" />
      </div>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <Link href="/products">Products</Link>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
