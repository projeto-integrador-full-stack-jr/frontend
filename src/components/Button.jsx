import React from 'react';
import clsx from 'clsx';

const buttonVariants = {
  primary: 'bg-[#2C49FA] hover:bg-[#102FF9] text-white font-semibold',
  secondary:
    'bg-[#2C49FA]/5 font-semi text-[#2C49FA] hover:bg-[#C3CBFD] border hover:border-[#102FF9]',
  outline:
    'after:block after:h-0.5 after:w-0 after:bg-[#2C49FA] after:transition-all after:duration-300 hover:after:w-full text-[#2C49FA] font-semibold',
};

const Button = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  className,
}) => {
  return (
    <button
      className={clsx(
        'cursor-pointer rounded-lg px-6 py-2 text-sm lg:px-12 lg:py-3 lg:text-lg',
        buttonVariants[variant],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
