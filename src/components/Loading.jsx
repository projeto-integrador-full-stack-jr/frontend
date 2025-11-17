import React from 'react';

const LoadingScreen = ({ text }) => {
    return (
        <div className="flex flex-col items-center justify-center text-gray-700">
            <div className="h-7 w-7 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-2 text-center text-sm md:text-sm">{text}</p>
        </div>
    );
};

export default LoadingScreen;
