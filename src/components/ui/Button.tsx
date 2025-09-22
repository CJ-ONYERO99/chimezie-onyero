import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

const button = cva(
  'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px]',
  {
    variants: {
      variant: {
        primary: 'text-black',
        secondary: 'text-[color:var(--brand-secondary)]',
        ghost: 'text-[color:var(--brand-primary)]'
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
      ? 'bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] hover:shadow-[0_0_35px_rgba(57,255,20,0.35)] focus-visible:ring-[var(--focus)]'
      : variant === 'secondary'
      ? 'bg-transparent border border-[color:var(--surface-border)] hover:bg-[var(--brand-secondary)] hover:text-black hover:shadow-[0_0_30px_rgba(0,255,136,0.25)] focus-visible:ring-[var(--focus)]'
      : 'bg-transparent hover:text-[color:var(--brand-secondary)] focus-visible:ring-[var(--focus)]'
  return <Comp ref={ref} className={clsx(button({ variant }), variantClass, className)} {...props} />
})

export function ButtonLink(
  { href, children, variant = 'primary', className, ...rest }:
  { href: string; children: React.ReactNode; variant?: VariantProps<typeof button>['variant']; className?: string } & Omit<React.ComponentProps<typeof Link>, 'href'>
) {
  const variantClass =
    variant === 'primary'
      ? 'bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] hover:shadow-[0_0_35px_rgba(57,255,20,0.35)] focus-visible:ring-[var(--focus)]'
      : variant === 'secondary'
      ? 'bg-transparent border border-[color:var(--surface-border)] hover:bg-[var(--brand-secondary)] hover:text-black hover:shadow-[0_0_30px_rgba(0,255,136,0.25)] focus-visible:ring-[var(--focus)]'
      : 'bg-transparent hover:text-[color:var(--brand-secondary)] focus-visible:ring-[var(--focus)]'
  return (
    <Link className={clsx(button({ variant }), variantClass, className)} href={href} {...rest}>
      {children}
    </Link>
  )
}
