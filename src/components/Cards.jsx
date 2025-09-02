import React from 'react';

export const Cards = ({ title, icon, text }) => {
  return (
    <div className="">
      <div className="flex items-center gap-4 pb-4">
        <img src={icon} alt={title} />
        <h3 className="px-4 text-2xl font-bold">{title}</h3>
      </div>
      <p className="px-4">{text}</p>
    </div>
  );
};
