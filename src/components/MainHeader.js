const MainHeader = ({ title, className = "" }) => {
    return (
        <header className={`bg-white shadow-sm ${className}`}>
            <div className="bg-blue-900 py-8 px-4 flex items-center justify-center relative">
                <h1 className="text-2xl text-white font-bold absolute left-1/2 transform -translate-x-1/2">
                    {title}
                </h1>
                <div className="absolute right-4">
                    {/* Do wypełnienia przez Ikonke jakas */}
                </div>
            </div>
        </header>
    );
};

export default MainHeader;