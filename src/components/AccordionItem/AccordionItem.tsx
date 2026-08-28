import faqChatIcon from '@/assets/icons/faq-chat.svg'
import faqChevronIcon from '@/assets/icons/faq-chevron.svg'
import styles from './AccordionItem.module.css'

type AccordionItemProps = {
  id: string
  question: string
  answer: string
  isOpen: boolean
  onToggle: (id: string) => void
}

export function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className={isOpen ? `${styles.item} ${styles.itemOpen}` : styles.item}>
      <button
        aria-controls={`${id}-panel`}
        aria-expanded={isOpen}
        className={styles.trigger}
        id={`${id}-trigger`}
        onClick={() => onToggle(id)}
        type="button"
      >
        <span className={styles.lead}>
          <img
            alt=""
            className={styles.chatIcon}
            height={32}
            src={faqChatIcon}
            width={32}
          />
          <span className={styles.question}>{question}</span>
        </span>
        <img
          alt=""
          aria-hidden
          className={styles.chevron}
          height={10}
          src={faqChevronIcon}
          width={19}
        />
      </button>
      <div
        className={styles.panel}
        hidden={!isOpen}
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
      >
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  )
}
