import Image from 'next/image';
import styles from './AboutSections.module.css';

export default function AboutUsPage() {
    return (
        <>
            <article className={styles.storyText}>
                <h1>
                    CRESCENDO ART FORUM
                </h1>

                <p>
                    Простір, де мистецтво стає приводом для дослідження, діалогу та співтворення.
                </p>

                <p>
                    Ми об’єднуємо учнів мистецьких шкіл і ліцеїв, викладачів, митців і експертів навколо спільного питання: як говорити про мистецтво глибоко, чесно і цікаво. У центрі проєкту — розвиток дослідницького мислення, культури публічного виступу та безбар’єрного освітнього середовища.
                </p>
                <p>Від учнівських конференцій і менторських шкіл до зустрічей з митцями та інклюзивних мистецьких подій — CRESCENDO ART FORUM створює умови, у яких кожен може бути почутим.
</p>
            </article>

            <div className={styles.imageFrame}>
                <Image
                    src="https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1400&q=80"
                    alt="Studio rehearsal during an experimental music session"
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                />
            </div>
        </>
    );
}