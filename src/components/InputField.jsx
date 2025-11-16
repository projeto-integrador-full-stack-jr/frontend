import React, { useState } from 'react';
import { EyeClosed, Eye } from 'lucide-react';

const InputField = ({ label, type = 'text', placeholder, onChange, name, value }) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    return (
        <div className="mb-4">
            <label className="font-md mb-[2px] block text-sm text-gray-700">{label}</label>
            <div className="relative">
                <input
                    type={isPassword && showPassword ? 'text' : type}
                    placeholder={placeholder}
                    className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-[14px] text-zinc-500 transition focus:ring-2 focus:ring-blue-500 focus:outline-none focus:placeholder:text-zinc-200"
                    onChange={onChange}
                    name={name}
                    value={value}
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
                        aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                    >
                        {showPassword ? (
                            <EyeClosed size={18} className="cursor-pointer" />
                        ) : (
                            <Eye size={18} className="cursor-pointer" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export default InputField;
