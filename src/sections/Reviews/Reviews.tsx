import decoration from '@/assets/icons/figma-vector.svg'
import starIcon from '@/assets/icons/star.svg'
import styles from './Reviews.module.css'

const STAR_COUNT = 5

const REVIEWS = [
  {
    name: 'Анна, 15 років',
    initial: 'А',
    text: '«Я давно хотіла навчитися створювати сайти, але боялася, що буде складно. На курсі все пояснюють зрозуміло, а вже за кілька тижнів я зробила свій перший дизайн у Figma.»',
  },
  {
    name: 'Максим, 16 років',
    initial: 'М',
    text: '«Найбільше подобається, що майже кожне заняття — це практика. Ми створюємо власні проєкти, а викладач завжди допомагає, якщо щось не виходить.»',
  },
  {
    name: 'Артем, 14 років',
    initial: 'А',
    text: '«Я навчився монтувати відео для TikTok і YouTube та вже зробив кілька власних роликів. Дуже круто, що можна одразу застосовувати знання на практиці.»',
  },
]

export function Reviews() {
  return (
    <section className={styles.section} id="reviews">
      <img alt="" className={styles.decoration} src={decoration} />
      <h2 className={styles.title}>Відгуки</h2>

      <ul className={styles.list}>
        {REVIEWS.map((review) => (
          <li className={styles.card} key={review.name}>
            <p className={styles.text}>{review.text}</p>

            <div className={styles.meta}>
              <span aria-hidden className={styles.avatar}>
                {review.initial}
              </span>
              <div className={styles.nameStars}>
                <p className={styles.name}>{review.name}</p>
                <div className={styles.stars}>
                  {Array.from({ length: STAR_COUNT }).map((_, index) => (
                    <img alt="" key={index} src={starIcon} />
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
