import { Button } from '@/components/Button/Button'
import styles from './Hero.module.css'
import heroMobile from '@/img/image-hero-mob.png'
import heroTablet from '@/img/image-hero-tab.png'
import heroDesktop from '@/img/image-hero-desc.png'

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <picture className={styles.photo}>
        <source media="(min-width: 1440px)" srcSet={heroDesktop} />
        <source media="(min-width: 768px)" srcSet={heroTablet} />
        <img src={heroMobile} alt="" fetchPriority="high" />
      </picture>
      <div aria-hidden className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.badge}>
            Курси для підлітків 12–17 років
          </span>
          <h1 className={styles.title}>
            Навчайтеся.
            <br />
            <span className={styles.titleLine}>Творіть.</span> Досліджуйте.
          </h1>
        </div>

        <div className={styles.aside}>
          <p>
            Відкривай нові навички, перетворюй ідеї на власні проєкти та
            знаходь те, що тебе надихає.
          </p>
          <Button className={styles.cta} href="#trial" variant="solid">
            Записатись на пробне заняття
          </Button>
        </div>
      </div>
    </section>
  )
}
