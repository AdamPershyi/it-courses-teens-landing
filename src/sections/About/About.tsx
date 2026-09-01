import modernProgramsImage from '@/img/about-modern-programs.png'
import mentorsImage from '@/img/about-mentors.png'
import practiceImage from '@/img/about-practice.png'
import supportImage from '@/img/about-support.png'
import aboutMobileImage from '@/img/about-students-mobile@2x.png'
import aboutDesktopImage from '@/img/about-students-desktop@2x.png'
import styles from './About.module.css'

const FEATURES = [
  {
    image: modernProgramsImage,
    title: 'Сучасні програми',
  },
  {
    image: practiceImage,
    title: 'Практика з першого уроку',
  },
  {
    image: mentorsImage,
    title: 'Досвідчені ментори',
  },
  {
    image: supportImage,
    title: 'Підтримка на кожному етапі',
  },
]

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <h2>Місце, де підлітки розкривають свій потенціал</h2>
            <p>
              Ми створюємо сучасні курси для підлітків, які хочуть
              розвиватися, творити та впевнено дивитися у майбутнє в світі
              технологій.
            </p>
          </div>

          <ul className={styles.features}>
            {FEATURES.map((feature) => (
              <li className={styles.feature} key={feature.title}>
                <img alt="" src={feature.image} />
                <p>{feature.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <picture className={styles.imageWrap}>
          <source media="(min-width: 1440px)" srcSet={aboutDesktopImage} />
          <img
            alt="Підлітки навчаються за ноутбуком"
            className={styles.image}
            src={aboutMobileImage}
          />
        </picture>
      </div>
    </section>
  )
}
