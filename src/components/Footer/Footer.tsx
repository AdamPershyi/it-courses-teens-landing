import phoneIcon from '@/assets/icons/phone.svg'
import emailIcon from '@/assets/icons/email.svg'
import { NAV_LINKS } from '@/data/navigation'
import { SOCIAL_LINKS } from '@/data/socials'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.inner}>
        <div className={styles.contacts}>
          <p className={styles.contactsTitle}>Контакти</p>
          <div className={styles.contactsList}>
            <a className={styles.contactRow} href="tel:+380970000000">
              <span className={styles.contactIcon}>
                <img alt="" height={24} src={phoneIcon} width={24} />
              </span>
              +38 (097) 000 00 00
            </a>
            <a className={styles.contactRow} href="mailto:team@focuslearn.ua">
              <span className={styles.emailIcon}>
                <img alt="" height={24} src={emailIcon} width={24} />
              </span>
              team@focuslearn.ua
            </a>
            <div className={styles.socialsMobile}>
              <SocialList />
            </div>
          </div>
        </div>

        <nav aria-label="Категорії" className={styles.nav}>
          <p className={styles.navTitle}>Категорії</p>
          <div className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <a className={styles.navLink} href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className={styles.socialsAside}>
          <SocialList />
        </div>
      </div>

      <div className={styles.socialsTablet}>
        <SocialList />
      </div>
    </footer>
  )
}

function SocialList() {
  return (
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
            <img alt="" src={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}
