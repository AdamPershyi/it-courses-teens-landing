import { useId, useState, type FormEvent } from 'react'
import checkIcon from '@/assets/icons/figma-vector-2.svg'
import chevronDownIcon from '@/assets/icons/figma-chevron-down.svg'
import decoration from '@/assets/icons/form-decoration.svg'
import { SOCIAL_LINKS } from '@/data/socials'
import styles from './SignupForm.module.css'

const HIGHLIGHTS = [
  'Познайомимося',
  'Розкажемо про курс',
  'Допоможемо обрати напрям',
]

const COURSE_OPTIONS = [
  'UI/UX & Web Design',
  'Graphic Design',
  'Programming',
  'Video Editing',
  'Digital Marketing',
  'Public Speaking',
]

export function SignupForm() {
  const [course, setCourse] = useState('')
  const formHeadingId = useId()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: wire up to the real lead-submission endpoint
  }

  return (
    <section aria-labelledby={formHeadingId} className={styles.section} id="trial">
      <img alt="" className={styles.decoration} src={decoration} />

      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id={formHeadingId}>Спробуй безоплатне заняття</h2>
          <p>
            Познайомся з викладачем, спробуй себе в новому напрямі та
            зрозумій, чи це саме те, що тобі подобається.
          </p>

          <ul className={styles.highlights}>
            {HIGHLIGHTS.map((item) => (
              <li key={item}>
                <img alt="" src={checkIcon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className={styles.socials}>
            {SOCIAL_LINKS.map((item) => (
              <li key={item.name}>
                <a
                  aria-label={item.name}
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt="" src={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span className={styles.srOnly}>Ім’я</span>
            <input
              autoComplete="name"
              name="name"
              placeholder="Введіть своє ім’я"
              required
              type="text"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.srOnly}>Телефон</span>
            <input
              autoComplete="tel"
              name="phone"
              placeholder="+38 (097) 000 00 00"
              required
              type="tel"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.srOnly}>Email</span>
            <input
              autoComplete="email"
              name="email"
              placeholder="Введіть свій Email"
              required
              type="email"
            />
          </label>

          <label className={`${styles.field} ${styles.selectField}`}>
            <span className={styles.srOnly}>Курс</span>
            <select
              name="course"
              onChange={(event) => setCourse(event.target.value)}
              required
              value={course}
            >
              <option disabled value="">
                Оберить курс
              </option>
              {COURSE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <img
              alt=""
              aria-hidden
              className={styles.chevron}
              src={chevronDownIcon}
            />
          </label>

          <button className={styles.submit} type="submit">
            Записатись на пробне заняття
          </button>
        </form>
      </div>
    </section>
  )
}
