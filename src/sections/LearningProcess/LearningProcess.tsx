import { useLayoutEffect, useRef, useState } from 'react'
import mintDecor from '@/assets/icons/figma-vector.svg'
import mintDecorTablet from '@/assets/icons/figma-vector-tablet.svg'
import sunDecor from '@/assets/icons/figma-vector-1.svg'
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
  const [activePage, setActivePage] = useState(0)
  const [pageCount, setPageCount] = useState<number>(STEPS.length)

  const scrollToPage = (index: number) => {
    const list = listRef.current
    const card = list?.children[index] as HTMLElement | undefined
    if (!list || !card) return
    const padding = parseFloat(getComputedStyle(list).paddingLeft)
    list.scrollTo({
      left: card.offsetLeft - padding,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    })
  }

  const updatePage = () => {
    const list = listRef.current
    if (!list) return
    const first = list.children[0] as HTMLElement
    const second = list.children[1] as HTMLElement
    const step = second.offsetLeft - first.offsetLeft
    if (step <= 0) return
    const count = Math.round((list.scrollWidth - list.clientWidth) / step) + 1
    setPageCount(count)
    setActivePage(Math.min(count - 1, Math.round(list.scrollLeft / step)))
  }

  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return
    const observer = new ResizeObserver(updatePage)
    observer.observe(list)
    return () => observer.disconnect()
  }, [])

  useLayoutEffect(() => {
    const list = listRef.current
    if (!list || !window.matchMedia(MOBILE_MEDIA_QUERY).matches) return

    const initialCard = list.children[INITIAL_MOBILE_CARD_INDEX] as
      | HTMLElement
      | undefined
    if (!initialCard) return

    const targetScrollLeft =
      initialCard.offsetLeft - (list.clientWidth - initialCard.clientWidth) / 2

    list.scrollTo({ left: targetScrollLeft })
  }, [])

  return (
    <section className={styles.learning} id="learning">
      <img
        alt=""
        className={styles.mintVectorTablet}
        src={mintDecorTablet}
      />

      <img
        alt=""
        className={styles.decorMobile}
        src={learningImageMobile}
      />

      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Як відбувається навчання?</h2>
        </div>

        <div className={styles.gridWrap}>
          <ul className={styles.list} ref={listRef} id="learning-cards" onScroll={updatePage}>
            {STEPS.map((step) => (
              <li className={styles.cardWrap} key={step.title}>
                <div className={`${styles.card} ${styles[step.variant]}`}>
                  {step.variant === 'mint' && (
                    <img
                      alt=""
                      className={styles.mintVector}
                      src={mintDecor}
                    />
                  )}

                  {step.variant === 'sun' && (
                    <img
                      alt=""
                      className={styles.sunVector}
                      src={sunDecor}
                    />
                  )}

                  <div className={styles.cardText}>
                    <h3>
                      {step.title === 'Усе для старту в одному місці' ? (
                        <>
                          Усе для старту в одному
                          <br className={styles.titleBreak} /> місці
                        </>
                      ) : step.title ===
                        'Навчання онлайн — комфортно з будь-якого місця' ? (
                        <>
                          Навчання онлайн —
                          <br className={styles.titleBreak} /> комфортно з
                          будь-якого місця
                        </>
                      ) : step.title ===
                        'Навчаємось у невеликих групах — увага кожному' ? (
                        <>
                          Навчаємось у невеликих
                          <br className={styles.titleBreak} /> групах — увага
                          кожному
                        </>
                      ) : (
                        step.title
                      )}
                    </h3>

                    <p>{step.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <img
            alt=""
            className={styles.illustration}
            src={learningImage}
          />
        </div>

        <div className={styles.pagination} aria-label="Слайди навчання">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              className={styles.pageDot}
              aria-label={`Показати слайд ${index + 1}`}
              aria-controls="learning-cards"
              aria-current={activePage === index ? 'true' : undefined}
              onClick={() => scrollToPage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
