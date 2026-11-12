import React from 'react';

/**
 * Accessible button following the v4 contract:
 * - Minimum 44px touch target height
 * - Exact palette colors: Blue Slate (#4D6A6D), Grey Olive (#798478), Almond Silk (#C9ADA1)
 * - Clear focus, hover, disabled and loading states
 */
export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors min-h-[44px] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-3 focus-visible:outline-[#4D6A6D] focus-visible:outline-offset-2';

  const variants = {
    primary: 'bg-[#4D6A6D] hover:bg-[#3d5557] active:bg-[#34494a] text-white shadow-xs',
    secondary: 'bg-[#798478] hover:bg-[#687267] active:bg-[#586257] text-white shadow-xs',
    outline: 'border-2 border-[#4D6A6D] text-[#4D6A6D] bg-transparent hover:bg-[#4D6A6D]/10 active:bg-[#4D6A6D]/20',
    ghost: 'text-[#4D6A6D] hover:bg-[#4D6A6D]/10 active:bg-[#4D6A6D]/15',
    warm: 'bg-[#C9ADA1] hover:bg-[#ba9d90] active:bg-[#ac8f82] text-[#2A3638] shadow-xs'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{children}</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-2">
          {Icon && iconPosition === 'left' && <Icon size={18} aria-hidden="true" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon size={18} aria-hidden="true" />}
        </span>
      )}
    </button>
  );
}
