export const Cards = ({ title, icon, text }) => {
    return (
        <div className="flex flex-col pr-4">
            <div className="flex items-center pb-4 text-left">
                <div className="flex max-h-10 max-w-10 items-center justify-center rounded-md border border-blue-600 bg-blue-50 p-1 transition-transform duration-300 hover:scale-105">
                    <img src={icon} alt={title} className=" " />
                </div>
                <h3 className="px-4 font-outfit text-lg leading-5 font-semibold text-blue-700">{title}</h3>
            </div>
            <p className="text-sm leading-5 font-normal text-zinc-500">{text}</p>
        </div>
    );
};
