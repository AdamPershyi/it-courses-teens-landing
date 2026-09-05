import certificateMobile from '@/img/certificate-mobile@2x.png'
import certificateTablet from '@/img/certificate-tabx2.png'
import certificateDesktop from '@/img/certificate-desc2.png'
import styles from './Certificate.module.css'

export function Certificate() {
  return (
    <section className={styles.section} id="certificate">
      <h2 className={styles.title}>Сертифікат після закінчення навчання</h2>
      <div className={styles.container}>
        <picture>
          <source media="(min-width: 1440px)" srcSet={certificateDesktop} />
          <source media="(min-width: 768px)" srcSet={certificateTablet} />
          <img
            alt="Приклад іменного сертифіката після завершення курсу"
            className={styles.photo}
            height={308}
            src={certificateMobile}
            width={326}
          />
        </picture>
        <div className={styles.copy}>
          <p className={styles.lead}>
            Кожна дитина отримує сертифікат після закінчення навчання.
          </p>
          <p className={styles.lead}>
            Цей сертифікат підтверджує набуті знання та навички й може стати
            важливим доповненням при підготовці мотиваційного листа для вступу
            до ВНЗ.
          </p>
          <div className={styles.card}>
            <p className={styles.cardText}>
              Якщо в учнів або їхніх батьків виникають питання щодо вступу до
              закладів вищої освіти в Україні, наша команда, до якої входять
              експерти та представники українських ЗВО, безоплатно надає
              професійні консультації.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
