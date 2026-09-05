import certificateImage from '@/img/certificate-mobile@2x.png'
import styles from './Certificate.module.css'

export function Certificate() {
  return (
    <section className={styles.section} id="certificate">
      <h2 className={styles.title}>Сертифікат після закінчення курсів</h2>

      <div className={styles.container}>
        <img
          alt="Учень тримає сертифікат про успішне завершення курсу"
          className={styles.image}
          src={certificateImage}
        />

        <div className={styles.text}>
          <p>Кожна дитина отримує сертифікат після закінчення навчання.</p>
          <p>
            Цей сертифікат підтверджує набуті знання та навички й може стати
            важливим доповненням при підготовці мотиваційного листа для
            вступу до ВНЗ.
          </p>

          <div className={styles.card}>
            <p>
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
