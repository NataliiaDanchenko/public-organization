"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Logo from "@/assets/Logo.jpg";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Go to homepage">
          <Image
            src={Logo}
            alt="Public Organization"
            width={70}
            height={70}
            priority
          />
        </Link>

        <button
          className={styles.burger}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`${styles.nav} ${open ? styles.open : ""}`}
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
