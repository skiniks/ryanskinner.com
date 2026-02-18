interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5',
    lg: 'px-8 py-3',
  }

  const variantClasses = {
    primary:
      'button-primary relative overflow-hidden rounded-lg font-semibold text-white transition-all duration-300 isolate',
    secondary:
      'inline-flex items-center gap-2 rounded-lg bg-gray-900 border border-gray-700 font-semibold text-white transition-all duration-200 hover:border-blue-500/50 hover:scale-[1.02] hover:brightness-[1.3]',
  }

  return (
    <a
      href={href}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <span className={variant === 'primary' ? 'relative z-2' : ''}>
        {children}
      </span>
    </a>
  )
}
