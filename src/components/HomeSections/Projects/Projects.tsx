import Link from 'next/link';
import styles from './Projects.module.css';

export function Projects() {
    return (
        <>
            <article>
                <h3>Projects</h3>
                <p className={styles.lead}>
                    Immersive releases blending ambient forms, spoken textures and cinematic structure.
                </p>
                <Link href="/projects" className={styles.cta}>
                    View releases
                </Link>
            </article>
        </>
    )
}