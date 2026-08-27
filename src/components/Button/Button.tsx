import type { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  href: string
  children: ReactNode
  className?: string
}

export function Button({ href, children, className }: ButtonProps) {
  const classNames = className ? `${styles.button} ${className}` : styles.button

  return (
    <a className={classNames} href={href}>
      {children}
    </a>
  )
}
