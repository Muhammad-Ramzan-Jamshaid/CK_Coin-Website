import Link from 'next/link';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'ghost', 'gold-outline'
  size = 'md',        // 'sm', 'md', 'lg'
  isExternal = false,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
  ...props
}) {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const variantClass = 
    variant === 'primary' ? 'btn-primary' :
    variant === 'secondary' ? 'btn-secondary' :
    variant === 'ghost' ? 'btn-ghost' : 'btn-primary';

  const combinedClass = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
          aria-label={ariaLabel}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClass} aria-label={ariaLabel} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
