import type { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'outline' | 'solid'

type ButtonProps = {
  href: string
  children: ReactNode
  className?: string
  variant?: ButtonVariant
}

export function Button({
  href,
  children,
  className,
  variant = 'outline',
}: ButtonProps) {
  const variantClass = variant === 'solid' ? styles.solid : styles.outline
  const classNames = [styles.button, variantClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={classNames} href={href}>
      {children}
    </a>
  )
}
