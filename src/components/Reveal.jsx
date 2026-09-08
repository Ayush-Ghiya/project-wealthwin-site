// Content now renders directly (no scroll-fade) per the minimal design direction.
// Kept as a thin passthrough so page components don't need editing.
export function Reveal({ as: Tag = 'div', delay, className = '', children, ...props }) {
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}
