export type FaqItem = {
  id: string
  question: string
  answer: string
}

const ANSWER_PLACEHOLDER = 'Текст відповіді з макета.'

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'computer',
    question: 'Який комп’ютер потрібен для занять?',
    answer:
      'Для занять на наших курсах, в основному, підходить будь-який комп’ютер з встановленою операційною системою не нижче Windows 10. Системних характеристик цієї ОС зазвичай вистачає для виконання більшості завдань, які ми даємо дітям на наших програмах навчання. Також можна використовувати Linux або macOS. Однак, конкретні вимоги можуть відрізнятися залежно від обраного курсу.',
  },
  {
    id: 'schedule',
    question: 'Який графік занять?',
    answer: ANSWER_PLACEHOLDER,
  },
  {
    id: 'individual',
    question: 'Чи є у вас індивідуальні заняття?',
    answer: ANSWER_PLACEHOLDER,
  },
  {
    id: 'certificate',
    question: 'Що дає сертифікат по закінченню навчання?',
    answer: ANSWER_PLACEHOLDER,
  },
  {
    id: 'group-size',
    question: 'Скільки дітей в групі?',
    answer: ANSWER_PLACEHOLDER,
  },
  {
    id: 'benefits',
    question: 'Чи є ще якісь переваги?',
    answer: ANSWER_PLACEHOLDER,
  },
]
