import { Button } from '@/components/Button/Button'
import uiuxImage from '@/img/direction-uiux-web-design-desktop@2x.png'
import graphicImage from '@/img/direction-graphic-design-desktop@2x.png'
import programmingImage from '@/img/direction-programming-desktop@2x.png'
import videoImage from '@/img/direction-video-editing-desktop@2x.png'
import marketingImage from '@/img/direction-digital-marketing-desktop@2x.png'
import speakingImage from '@/img/direction-public-speaking-desktop@2x.png'
import styles from './Directions.module.css'

const COURSES = [
  {
    image: uiuxImage,
    title: 'UI/UX & Web Design',
    text: 'Створюй сучасні сайти, працюй у Figma та вивчай основи UX/UI-дизайну.',
  },
  {
    image: graphicImage,
    title: 'Graphic Design',
    text: 'Навчись створювати логотипи, постери, банери та контент для соціальних мереж.',
  },
  {
    image: programmingImage,
    title: 'Programming',
    text: 'Освой основи HTML, CSS і JavaScript та створи свій перший вебпроєкт.',
  },
  {
    image: videoImage,
    title: 'Video Editing',
    text: 'Монтуй відео, працюй зі звуком, анімацією та створюй контент для YouTube і TikTok.',
  },
  {
    image: marketingImage,
    title: 'Digital Marketing',
    text: 'Просувай бренди, аналізуй аудиторію та створюй кампанії для соцмереж.',
  },
  {
    image: speakingImage,
    title: 'Public Speaking',
    text: 'Навчайся впевнено виступати, презентувати ідеї та тримати увагу аудиторії.',
  },
]

export function Directions() {
  return (
    <section className={styles.directions} id="directions">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2>Обери напрямок, який тебе надихає</h2>
          <p>
            Практичні курси для підлітків 12–17 років. Навчання через реальні
            проєкти, творчість і командну роботу.
          </p>
        </div>

        <ul className={styles.list}>
          {COURSES.map((course) => (
            <li className={styles.card} key={course.title}>
              <div className={styles.imageBox}>
                <img alt="" src={course.image} />
              </div>
              <div className={styles.cardText}>
                <h3>{course.title}</h3>
                <p>{course.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <Button className={styles.moreButton} href="#contacts">
          Подивитись більше курсів
        </Button>
      </div>
    </section>
  )
}
