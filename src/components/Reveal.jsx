import { useReveal } from '../hooks/useReveal.js';

export function Reveal({ as: Tag = 'div', delay, className = '', children, ...props }) {
  const { ref, visible } = useReveal();
  const cls = ['reveal', visible ? 'is-visible' : '', className].filter(Boolean).join(' ');

  // DOM tag names forward refs natively. Component "as" targets (e.g. router Link)
  // may not reliably forward refs, so wrap them in a shrink-wrapped span instead.
  if (typeof Tag === 'string') {
    return (
      <Tag ref={ref} className={cls} data-delay={delay} {...props}>
        {children}
      </Tag>
    );
  }

  const wrapperCls = ['reveal', visible ? 'is-visible' : ''].filter(Boolean).join(' ');
  return (
    <span ref={ref} className={wrapperCls} data-delay={delay} style={{ display: 'inline-block' }}>
      <Tag className={className} {...props}>{children}</Tag>
    </span>
  );
}
