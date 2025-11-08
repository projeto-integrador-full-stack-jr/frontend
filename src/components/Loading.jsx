import React from 'react';

const LoadingScreen = ({ text }) => {
    return (
        <div className="flex flex-col items-center justify-center text-gray-700">
            <p className="mb-6 text-center text-sm md:text-base">{text}</p>
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        </div>
    );
};

export default LoadingScreen;
