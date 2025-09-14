import React, { useState } from 'react';

const InputField = ({ label, type = 'text', placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          type={isPassword && showPassword ? 'text' : type}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
