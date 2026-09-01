import bannerBg from '@/assets/icons/figma-trial-banner-bg.svg'
import styles from './TrialBanner.module.css'

export function TrialBanner() {
  return (
    <section className={styles.banner}>
      <img alt="" className={styles.background} src={bannerBg} />
      <div className={styles.inner}>
        <p>
          Кожен курс включає елементи штучного інтелекту: від використання
          готових інструментів та модулів ШІ до створення власних
          ШІ-проєктів. Це допоможе учням опанувати сучасні технології та
          підготуватися до майбутнього.
        </p>
      </div>
    </section>
  )
}
