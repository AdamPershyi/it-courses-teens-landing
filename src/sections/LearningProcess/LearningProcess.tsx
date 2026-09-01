import { useLayoutEffect, useRef } from 'react'
import mintDecor from '@/assets/icons/figma-vector.svg'
import sunDecor from '@/assets/icons/figma-vector-1.svg'
import paginationDots from '@/assets/icons/figma-offer-banner.svg'
import learningImage from '@/img/how-learning-desktop@2x.png'
import learningImageMobile from '@/img/how-learning-mobile@2x.png'
import styles from './LearningProcess.module.css'

const MOBILE_MEDIA_QUERY = '(max-width: 767px)'
const INITIAL_MOBILE_CARD_INDEX = 2

const STEPS = [
  {
    title: 'Усе для старту в одному місці',
    text: 'Усі уроки, записи занять, домашні завдання та навчальні матеріали доступні 24/7 в особистому кабінеті. Навіть якщо заняття пропущено — усе завжди під рукою.',
    variant: 'mint',
  },
  {
    title: 'Навчання онлайн — комфортно з будь-якого місця',
    text: 'Дитина може навчатися з будь-якої точки світу — вдома, у подорожі чи навіть за кордоном. Потрібні лише ноутбук, стабільний інтернет і бажання навчатися.',
    variant: 'white',
  },
  {
    title: 'Підтримка, що надихає розвиватися',
    text: 'Викладачі весь час поруч: допомагають, пояснюють помилки та скеровують. Дитина не залишається сам на сам зі складними темами й стабільно рухається до результату.',
    variant: 'sun',
  },
  {
    title: 'Менше теорії — більше реальних завдань',
    text: 'На кожному занятті учні не просто слухають теорію, а працюють над власними проєктами, розвивають практичні навички та поступово формують своє портфоліо.',
    variant: 'white',
  },
  {
    title: 'Навчаємось у невеликих групах — увага кожному',
    text: 'Невеликі групи — кожен може ставити запитання, отримувати зрозумілі пояснення та навчатися у комфортному темпі. Викладач встигає приділити увагу кожному та допомогти розібратися зі складними темами.',
    variant: 'white',
  },
] as const

export function LearningProcess() {
  const listRef = useRef<HTMLUListElement>(null)

  useLayoutEffect(() => {
    const list = listRef.current
    if (!list || !window.matchMedia(MOBILE_MEDIA_QUERY).matches) return

    const initialCard = list.children[INITIAL_MOBILE_CARD_INDEX] as
      | HTMLElement
      | undefined
    initialCard?.scrollIntoView({ inline: 'start', block: 'nearest' })
  }, [])

  return (
    <section className={styles.learning} id="learning">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Як відбувається навчання?</h2>
          <img alt="" className={styles.decor} src={learningImage} />
        </div>

        <ul className={styles.list} ref={listRef}>
          {STEPS.map((step) => (
            <li className={styles.cardWrap} key={step.title}>
              <div className={`${styles.card} ${styles[step.variant]}`}>
                {step.variant === 'mint' && (
                  <img alt="" className={styles.mintVector} src={mintDecor} />
                )}
                {step.variant === 'sun' && (
                  <img alt="" className={styles.sunVector} src={sunDecor} />
                )}
                <div className={styles.cardText}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
              {step.variant === 'sun' && (
                <img
                  alt=""
                  className={styles.cardDecor}
                  src={learningImageMobile}
                />
              )}
            </li>
          ))}
        </ul>

        <img alt="" className={styles.pagination} src={paginationDots} />
      </div>
    </section>
  )
}
