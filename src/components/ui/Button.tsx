import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

const button = cva(
  'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium shadow-soft focus-visible:outline-none focus-visible:ring-2 transition-colors motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px]',
  {
    variants: {
      variant: {
        primary: 'text-white',
        secondary: '',
        ghost: ''
      }
    },
    defaultVariants: { variant: 'primary' }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant, asChild, ...props }, ref) {
  const Comp: any = asChild ? 'span' : 'button'
  const variantClass =
    variant === 'primary'
      ? 'bg-[var(--accent-crimson)] hover:bg-[var(--accent-crimson-hover)] text-white'
      : variant === 'secondary'
      ? 'bg-transparent border border-[color:var(--border)] text-[color:var(--text-primary)]'
      : ''
  return <Comp ref={ref} className={clsx(button({ variant }), variantClass, className)} {...props} />
})

export function ButtonLink(
  { href, children, variant = 'primary', className, ...rest }:
  { href: string; children: React.ReactNode; variant?: VariantProps<typeof button>['variant']; className?: string } & Omit<React.ComponentProps<typeof Link>, 'href'>
) {
  const variantClass =
    variant === 'primary'
      ? 'bg-[var(--accent-crimson)] hover:bg-[var(--accent-crimson-hover)] text-white'
      : variant === 'secondary'
      ? 'bg-transparent border border-[color:var(--border)] text-[color:var(--text-primary)]'
      : ''
  return (
    <Link className={clsx(button({ variant }), variantClass, className)} href={href} {...rest}>
      {children}
    </Link>
  )
}
