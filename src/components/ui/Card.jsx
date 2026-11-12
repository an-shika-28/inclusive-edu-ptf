import React from 'react';

/**
 * Reusable Card component:
 * - 14px radius (rounded-xl)
 * - Subtle border in #D8CEBC
 * - Soft warm background #F9F6F0
 * - Minimal, quiet shadow
 */
export default function Card({
  children,
  className = '',
  as: Component = 'div',
  hoverEffect = false,
  ...props
}) {
  return (
    <Component
      className={`bg-[#F9F6F0] border border-[#D8CEBC] rounded-xl p-6 shadow-xs ${
        hoverEffect
          ? 'transition-all duration-200 hover:border-[#A0A083] hover:shadow-sm'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
