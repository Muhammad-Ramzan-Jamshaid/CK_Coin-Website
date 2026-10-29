export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center', // 'center', 'left'
  level = 'h2',
  className = '',
}) {
  const HeadingTag = level;

  return (
    <div className={`section-heading align-${align} ${className}`}>

      <HeadingTag className="section-title">
        {title}{' '}
        {highlight && <span className="gradient-text-royal">{highlight}</span>}
      </HeadingTag>

      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
