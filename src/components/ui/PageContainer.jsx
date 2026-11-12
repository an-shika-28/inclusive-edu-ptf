import React from 'react';

/**
 * Standard PageContainer enforcing the contract:
 * - Max width: approx 1200px
 * - Consistent 24px desktop gutters and 16px mobile gutters
 */
export default function PageContainer({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={`w-full max-w-300 mx-auto px-4 sm:px-6 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
