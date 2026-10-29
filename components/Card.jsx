export default function Card({
  title,
  subtitle,
  children,
  icon,
  badge,
  footer,
  className = '',
  highlight = false,
}) {
  return (
    <div className={`glass-panel custom-card ${highlight ? 'card-highlight' : ''} ${className}`}>
      {(icon || badge) && (
        <div className="card-top">
          {icon && <div className="card-icon">{icon}</div>}
          {badge && <div className="card-badge">{badge}</div>}
        </div>
      )}

      {title && <h3 className="card-title">{title}</h3>}
      {subtitle && <p className="card-subtitle">{subtitle}</p>}

      <div className="card-body">{children}</div>

      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
