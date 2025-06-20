const TabPanel = ({ onToggle, activeButtons }) => {
    return (
        <div className="mt-8 w-full bg-yellow-100 border-2 border-red-500 py-4">
            <div className="flex justify-center gap-4">
                <button
                    onClick={() => onToggle('daily')}
                    className={`px-4 py-2 rounded text-white 
                    ${activeButtons.daily ? 'bg-blue-500' : 'bg-gray-500'}`}
                >
                    Daily
                </button>
                <button
                    onClick={() => onToggle('weekly')}
                    className={`px-4 py-2 rounded text-white ${
                        activeButtons.weekly ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
                >
                    Weekly
                </button>
            </div>
        </div>
    );
};
export default TabPanel;