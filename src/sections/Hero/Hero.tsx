import { Button } from '@/components/Button/Button'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
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
