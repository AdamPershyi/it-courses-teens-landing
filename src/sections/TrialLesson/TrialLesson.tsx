import { useState, type FormEvent } from 'react'
import { SOCIAL_LINKS } from '@/data/socials'
import styles from './TrialLesson.module.css'

const BENEFITS = [
  'Познайомимося',
  'Розкажемо про курс',
  'Допоможемо обрати напрям',
] as const

const COURSE_OPTIONS = [
  'UI/UX & Web Design',
  'Graphic Design',
  'Programming',
  'Video Editing',
  'Digital Marketing',
  'Public Speaking',
] as const

function CheckIcon() {
  return (
    <svg
      aria-hidden
      className={styles.check}
      fill="none"
      height={13}
      viewBox="0 0 17 13"
      width={17}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M15.6453 0.225837C15.8505 0.393738 15.9807 0.636286 16.0071 0.90014C16.0336 1.16399 15.9541 1.42755 15.7863 1.63284L6.78629 12.6328C6.69783 12.741 6.58769 12.8294 6.46297 12.8923C6.33826 12.9553 6.20174 12.9914 6.0622 12.9984C5.92267 13.0054 5.78323 12.983 5.65286 12.9328C5.52249 12.8826 5.40409 12.8056 5.30529 12.7068L0.305288 7.70684C0.209778 7.61459 0.133596 7.50425 0.0811869 7.38224C0.0287779 7.26024 0.00119157 7.12902 3.77571e-05 6.99624C-0.00111606 6.86346 0.0241854 6.73178 0.0744663 6.60888C0.124747 6.48599 0.199 6.37434 0.292893 6.28044C0.386786 6.18655 0.498438 6.1123 0.621334 6.06202C0.744231 6.01173 0.87591 5.98643 1.00869 5.98759C1.14147 5.98874 1.27269 6.01633 1.39469 6.06874C1.5167 6.12114 1.62704 6.19733 1.71929 6.29284L5.93829 10.5118L14.2383 0.366838C14.4062 0.161587 14.6487 0.0314286 14.9126 0.00498697C15.1764 -0.0214547 15.44 0.0579856 15.6453 0.225837Z"
        fill="#484C56"
        fillRule="evenodd"
      />
    </svg>
  )
}

export function TrialLesson() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="trial">
      <svg
        aria-hidden
        className={styles.decor}
        fill="none"
        viewBox="-217 6 368 184"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-217 190C-217.001 165.836 -212.243 141.909 -202.997 119.585C-193.751 97.2602 -180.198 76.9757 -163.112 59.8895C-146.026 42.8032 -125.742 29.2499 -103.418 20.0035C-81.0944 10.7571 -57.1679 5.9987 -33.005 6C68.6174 6 151 88.3749 151 190"
          stroke="#B5D8D6"
          strokeMiterlimit={10}
          strokeWidth={12}
        />
        <path
          d="M-175.452 190C-175.452 152.098 -160.443 115.749 -133.728 88.9486C-107.014 62.1482 -70.7805 47.0918 -33 47.0918C4.78052 47.0918 41.0137 62.1482 67.7285 88.9486C94.4434 115.749 109.452 152.098 109.452 190"
          stroke="#B5D8D6"
          strokeMiterlimit={10}
          strokeWidth={12}
        />
        <path
          d="M-135.73 190C-135.73 162.754 -124.906 136.625 -105.641 117.359C-86.3752 98.0938 -60.2456 87.2705 -33 87.2705C-5.75442 87.2705 20.3752 98.0938 39.6407 117.359C58.9063 136.625 69.7295 162.754 69.7295 190"
          stroke="#B5D8D6"
          strokeMiterlimit={10}
          strokeWidth={12}
        />
      </svg>
      <div className={styles.container}>
        <div className={styles.copy}>
          <h2 className={styles.title}>Спробуй безоплатне заняття</h2>
          <p className={styles.subtitle}>
            Познайомся з викладачем, спробуй себе в новому напрямі та зрозумій,
            чи це саме те, що тобі подобається.
          </p>
          <ul className={styles.list}>
            {BENEFITS.map((item) => (
              <li className={styles.listItem} key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className={styles.socials}>
            {SOCIAL_LINKS.map((item) => (
              <li key={item.name}>
                <a
                  aria-label={item.name}
                  className={styles.socialLink}
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt="" height={28} src={item.icon} width={28} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.fields}>
            <input
              aria-label="Ім’я"
              autoComplete="name"
              className={styles.input}
              name="name"
              placeholder="Введіть своє ім’я"
              required
              type="text"
            />
            <input
              aria-label="Телефон"
              autoComplete="tel"
              className={styles.input}
              name="phone"
              placeholder="+38 (097) 000 00 00"
              required
              type="tel"
            />
            <input
              aria-label="Email"
              autoComplete="email"
              className={styles.input}
              name="email"
              placeholder="Введіть свій Email"
              required
              type="email"
            />
            <select
              aria-label="Курс"
              className={styles.input}
              defaultValue=""
              name="course"
              required
            >
              <option disabled value="">
                Оберіть курс
              </option>
              {COURSE_OPTIONS.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <button
            className={styles.submit}
            disabled={submitted}
            type="submit"
          >
            Записатись на пробне заняття
          </button>
        </form>
      </div>
    </section>
  )
}
