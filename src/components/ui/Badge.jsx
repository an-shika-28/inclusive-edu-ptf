import React from 'react';

export default function Badge({
  children,
  variant = 'sage',
  className = '',
  icon: Icon
}) {
  const variants = {
    sage: 'bg-[#A0A083]/20 text-[#3d4b3d] border border-[#A0A083]/40',
    almond: 'bg-[#C9ADA1]/25 text-[#4a362f] border border-[#C9ADA1]/50',
    slate: 'bg-[#4D6A6D]/15 text-[#30484a] border border-[#4D6A6D]/30',
    olive: 'bg-[#798478]/20 text-[#303d32] border border-[#798478]/40'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide uppercase ${
        variants[variant] || variants.sage
      } ${className}`}
    >
      {Icon && <Icon size={13} aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
}
