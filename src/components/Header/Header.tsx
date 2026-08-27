import { useCallback, useEffect, useId, useState } from 'react'
import burgerIcon from '@/assets/icons/burger.svg'
import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu'
import { Button } from '@/components/Button/Button'
import { NAV_LINKS } from '@/data/navigation'
import styles from './Header.module.css'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1440px)')

    const closeOnDesktop = () => {
      if (media.matches) {
        closeMenu()
      }
    }

    media.addEventListener('change', closeOnDesktop)
    return () => media.removeEventListener('change', closeOnDesktop)
  }, [closeMenu])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.navCluster}>
            <div className={styles.brand}>
              <button
                aria-controls={menuId}
                aria-expanded={isMenuOpen}
                aria-label="Відкрити меню"
                className={styles.burger}
                onClick={() => setIsMenuOpen(true)}
                type="button"
              >
                <img alt="" height={32} src={burgerIcon} width={32} />
              </button>
              <a className={styles.logo} href="#hero">
                LOGO
              </a>
            </div>

            <nav aria-label="Головна навігація" className={styles.desktopNav}>
              {NAV_LINKS.map((link) => (
                <a className={styles.navLink} href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.contacts}>
            <span className={styles.lang}>UA</span>
            <Button className={styles.contactsButton} href="#contacts">
              Контакти
            </Button>
          </div>
        </div>
      </header>

      <div id={menuId}>
        <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </>
  )
}
