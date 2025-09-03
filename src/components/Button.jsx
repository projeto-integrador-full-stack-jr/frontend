import React from 'react';

const styles = {
  primary: 'bg-[#1F71A5] hover:bg-[#1a6696] text-white font-semibold',
  outline:
    'border-2 border-[#1F71A5] font-semibold text-[#1F71A5] hover:bg-[#1F71A5] hover:text-white',
};

const Button = ({ label, onClick, style }) => {
  return (
    <button
      className={`cursor-pointer rounded-xl px-6 py-2 text-sm lg:px-12 lg:py-3 lg:text-lg ${styles[style]} `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
