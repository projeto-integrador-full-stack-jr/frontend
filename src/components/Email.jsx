import React from 'react';

const Email = ({ label, button_label, placeholder }) => {
  return (
    <form className="pt-4 lg:mr-12">
      <label htmlFor="email">{label}</label>
      <div className="flex flex-row justify-center pt-2">
        <input
          type="email"
          name="email"
          id="email"
          placeholder={placeholder}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          className="w-3/5 rounded-l-xl border-2 border-white px-4 py-2 text-lg placeholder:bg-[#2C49FA] lg:w-90"
          required
        />
        <button
          type="submit"
          className="cursor-pointer rounded-r-xl bg-white px-4 py-2 text-[#2C49FA] hover:bg-[#f4f4f4]"
        >
          {button_label}
        </button>
      </div>
    </form>
  );
};

export default Email;
