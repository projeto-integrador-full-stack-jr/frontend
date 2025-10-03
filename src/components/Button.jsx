import React from 'react';
import clsx from 'clsx';

const buttonVariants = {
  primary:
    'bg-[#2C49FA] hover:bg-[#102FF9] text-white font-medium px-5 py-2 rounded-md',
  secondary:
    'bg-[#2C49FA]/5 font-semi text-[#2C49FA] hover:bg-[#C3CBFD] px-5 py-2 rounded-md font-medium',
  outline:
    'after:block after:h-0.5 after:w-0 after:bg-[#2C49FA] after:transition-all after:duration-300 hover:after:w-full text-[#2C49FA] font-medium px-5 py-2 rounded-md',
  danger:
    'bg-[#EA4335] hover:bg-[#CB2415] text-white font-medium px-5 py-3 rounded-md w-full',
  tertiary:
    'bg-white text-[#2C49FA] hover:bg-[#2C49FA] hover:text-white font-medium px-5 py-3 rounded-md w-full',
};

const Button = ({
  label,
  variant = 'primary',
  disabled = false,
  className,
  title,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        'flex cursor-pointer items-center gap-2 rounded-lg text-sm lg:text-lg',
        buttonVariants[variant],
        icon ? 'px-4' : 'px-6',
        className
      )}
      title={title}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {label}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

export default Button;
