import { useState } from 'react'
import { AccordionItem } from '@/components/AccordionItem/AccordionItem'
import { FAQ_ITEMS } from '@/data/faq'
import styles from './Faq.module.css'

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(null)

  const onToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section className={styles.section} id="faq">
      <h2 className={styles.title}>FAQ</h2>
      <div className={styles.list}>
        {FAQ_ITEMS.map((item) => (
          <AccordionItem
            answer={item.answer}
            id={item.id}
            isOpen={openId === item.id}
            key={item.id}
            onToggle={onToggle}
            question={item.question}
          />
        ))}
      </div>
    </section>
  )
}
