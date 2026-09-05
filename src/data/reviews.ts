import reviewAnna from '@/img/review_anna.png'
import reviewMax from '@/img/review_max.png'
import reviewArtem from '@/img/review_artem.png'

export type Review = {
  id: string
  text: string
  name: string
  age: number
  rating: number
  avatar: string
}

export const REVIEWS: Review[] = [
{
    id: 'anna',
    text: '«Я давно хотіла навчитися створювати сайти, але боялася, що буде складно. На курсі все пояснюють зрозуміло, а вже за кілька тижнів я зробила свій перший дизайн у Figma.»',
    name: 'Анна',
    age: 15,
    rating: 5,
    avatar: reviewAnna
  },
  {
    id: 'maksym',
    text: '«Найбільше подобається, що майже кожне заняття — це практика. Ми створюємо власні проєкти, а викладач завжди допомагає, якщо щось не виходить.»',
    name: 'Максим',
    age: 16,
    rating: 5,
    avatar: reviewMax
  },
  {
    id: 'artem',
    text: '«Я навчився монтувати відео для TikTok і YouTube та вже зробив кілька власних роликів. Дуже круто, що можна одразу застосовувати знання на практиці.»',
    name: 'Артем',
    age: 14,
    rating: 5,
    avatar: reviewArtem
  },
]

const TABLET_REVIEW_IDS = ['maksym', 'artem', 'anna'] as const

export function getReviewsForLayout(isTablet: boolean): Review[] {
  if (!isTablet) {
    return REVIEWS
  }

  return TABLET_REVIEW_IDS.flatMap((id) => {
    const review = REVIEWS.find((item) => item.id === id)
    return review ? [review] : []
  })
}
  
