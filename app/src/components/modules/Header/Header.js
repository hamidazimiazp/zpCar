import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <Link href="/">Zp Car Shop</Link>
      </h1>
    </header>
  );
};

export default Header;
