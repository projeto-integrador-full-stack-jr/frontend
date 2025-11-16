import React from 'react';

const Email = ({ label, button_label, placeholder }) => {
    return (
        <form className="flex-col">
            <label htmlFor="email">{label}</label>
            <div className="flex flex-row justify-center pt-2">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={placeholder}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="w-full rounded-l-md border-2 border-white bg-blue-600 px-4 py-2 text-zinc-100 placeholder:text-blue-50 focus:outline-blue-50 focus:placeholder:text-blue-400 lg:w-90"
                    required
                />
                <button
                    type="submit"
                    className="cursor-pointer rounded-r-md bg-white px-4 py-2 font-semibold whitespace-nowrap text-blue-600 hover:bg-blue-100 hover:text-blue-600 focus:outline-blue-50"
                >
                    {button_label}
                </button>
            </div>
        </form>
    );
};

export default Email;
