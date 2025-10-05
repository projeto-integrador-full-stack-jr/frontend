import React from 'react';

export const Cards = ({ title, icon, text }) => {
    return (
        <div className="flex h-70 flex-col items-center justify-center">
            <div className="flex items-center pb-4">
                <img src={icon} alt={title} />
                <h3 className="px-4 text-lg font-bold md:text-2xl">{title}</h3>
            </div>
            <p className="px-4 text-base font-light">{text}</p>
        </div>
    );
};
