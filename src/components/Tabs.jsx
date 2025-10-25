const Tabs = ({ currentPage, onSwitchPage }) => {
    return (
        <div className="mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1">
            <button
                type="button"
                onClick={() => onSwitchPage('login')}
                className={`w-1/2 cursor-pointer rounded-md py-2.5 text-center text-sm font-semibold transition-colors ${
                    currentPage === 'login' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-200'
                }`}
            >
                Login
            </button>

            <button
                type="button"
                onClick={() => onSwitchPage('register')}
                className={`w-1/2 cursor-pointer rounded-md py-2.5 text-center text-sm font-semibold transition-colors ${
                    currentPage === 'register' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-200'
                }`}
            >
                Criar conta
            </button>
        </div>
    );
};

export default Tabs;
