import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <h1>Art, resonance, and contemporary ritual in motion.</h1>
                    <p className={styles.lead}>
                        Public Organization curates albums, performances and educational programs where
                        sound becomes architecture and image becomes memory.
                    </p>
                    <Link href="/discography" className={styles.cta}>
                        Explore
                    </Link>
                </div>
            </section>
        </>
    )
}