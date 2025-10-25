import clsx from 'clsx';
const tabsVariants = {
    primary: ['bg-blue-600 text-white shadow', 'text-gray-600 hover:bg-gray-200'],
    secondary: ['bg-[#2C49FA] text-white', 'text-gray-600 hover:bg-gray-200'],
};

const Tabs = ({
    currentPage,
    onSwitchPage,
    label1,
    label2,
    variant,
    icon,
    iconPosition = 'left',
    iconFor = 'tab2',
}) => {
    const isIconForFirst = iconFor === 'tab1' || iconFor === 'first';
    const isIconForSecond = iconFor === 'tab2' || iconFor === 'second';

    return (
        <div className={clsx('mb-6 flex w-full items-center rounded-lg bg-gray-200', icon ? 'p-2' : 'px-0')}>
            <button
                type="button"
                onClick={() => onSwitchPage('tab1')}
                className={`w-1/2 cursor-pointer rounded-md py-3.5 text-center text-sm font-semibold transition-colors ${
                    currentPage === 'tab1' ? tabsVariants[variant][0] : tabsVariants[variant][1]
                }`}
            >
                {icon && isIconForFirst && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}

                {label1}
                {icon && isIconForFirst && iconPosition === 'right' && <span className="inline-flex">{icon}</span>}
            </button>

            <button
                type="button"
                onClick={() => onSwitchPage('tab2')}
                className={`flex w-1/2 cursor-pointer items-center justify-center gap-2 rounded-md py-2.5 text-center text-sm font-semibold transition-colors ${
                    currentPage === 'tab2' ? tabsVariants[variant][0] : tabsVariants[variant][1]
                }`}
            >
                {icon && isIconForSecond && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}
                {label2}
                {icon && isIconForSecond && iconPosition === 'right' && <span className="inline-flex">{icon}</span>}
            </button>
        </div>
    );
};

export default Tabs;
