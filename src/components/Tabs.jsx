const Tabs = ({ currentPage, onSwitchPage }) => {
    return (
        <div className="mb-6 flex w-full items-center gap-[6px] rounded-lg bg-gray-100 p-2">
            <button
                type="button"
                onClick={() => onSwitchPage('login')}
                className={`w-1/2 cursor-pointer rounded-md py-2.5 text-center text-sm font-semibold transition-colors ${
                    currentPage === 'login' ? 'bg-blue-600 text-white shadow' : 'text-gray-600'
                }`}
            >
                Login
            </button>

            <button
                type="button"
                onClick={() => onSwitchPage('register')}
                className={`w-1/2 cursor-pointer rounded-md py-2.5 text-center text-sm font-semibold transition-colors ${
                    currentPage === 'register' ? 'bg-blue-600 text-white shadow' : 'text-gray-600'
                }`}
            >
                Criar conta
            </button>
        </div>
    );
};

export default Tabs;
