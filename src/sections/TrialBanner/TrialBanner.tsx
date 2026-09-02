import bannerBg from '@/assets/icons/figma-trial-banner-bg.svg'
import bannerBgDesktop from '@/assets/icons/figma-trial-banner-bg-desktop.svg'
import styles from './TrialBanner.module.css'

export function TrialBanner() {
  return (
    <section className={styles.banner}>
      <img alt="" className={styles.background} src={bannerBg} />
      <img
        alt=""
        className={styles.backgroundDesktop}
        src={bannerBgDesktop}
      />
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
