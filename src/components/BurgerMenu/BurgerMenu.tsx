import { useEffect } from 'react'
import { NAV_LINKS } from '@/data/navigation'
import styles from './BurgerMenu.module.css'

type BurgerMenuProps = {
  isOpen: boolean
  onClose: () => void
}

export function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.root}>
      <button
        aria-label="Закрити меню"
        className={styles.backdrop}
        onClick={onClose}
        type="button"
      />
      <div
        aria-label="Меню"
        aria-modal="true"
        className={styles.panel}
        role="dialog"
      >
        <div className={styles.panelHeader}>
          <a className={styles.logo} href="#hero" onClick={onClose}>
            LOGO
          </a>
          <button
            aria-label="Закрити меню"
            className={styles.close}
            onClick={onClose}
            type="button"
          />
        </div>
        <nav aria-label="Мобільна навігація" className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a
              className={styles.link}
              href={link.href}
              key={link.href}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
