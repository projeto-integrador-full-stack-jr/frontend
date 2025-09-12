import React from 'react';

const styles = {
  primary: 'bg-[#2C49FA] hover:bg-[#102FF9] text-white font-semibold',
  secondary: 'bg-[#2C49FA]/5 font-semi text-[#2C49FA] hover:bg-[#C3CBFD] ',
  outline:
    'after:block after:h-0.5 after:w-0 after:bg-[#2C49FA] after:transition-all after:duration-300 hover:after:w-full text-[#2C49FA] font-semibold',
};

const Button = ({ label, onClick, style }) => {
  return (
    <button
      className={`cursor-pointer rounded-lg px-6 py-2 text-sm lg:px-12 lg:py-3 lg:text-lg ${styles[style]} `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
