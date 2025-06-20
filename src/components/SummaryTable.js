import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faChartLine, faTemperatureHigh, faTemperatureLow  } from '@fortawesome/free-solid-svg-icons';

const SummaryTable = ({data}) => {
    return (
        <div className="flex flex-col space-y-4 p-5 mt-4">
            <div className="flex items-center bg-yellow-100 justify-start">
                <FontAwesomeIcon icon={faSun} className="text-yellow-500 text-2xl p-3"/>
                <div className="ml-4 text-lg font-semibold text-gray-800">
                    <span> Średnie nasłonecznienie: {data.avgSunlight}  </span>
                </div>
            </div>
            <div className="flex items-center bg-blue-100 justify-start">
                <FontAwesomeIcon icon={faChartLine} className="text-blue-500 text-2xl p-3"/>
                <div className="ml-4 text-lg font-semibold text-gray-800">
                    <span> Średnie ciśnienie: {data.avgPressure} hPa  </span>
                </div>
            </div>
            <div className="flex items-center bg-red-100 justify-start">
                <FontAwesomeIcon icon={faTemperatureHigh} className="text-red-500 text-2xl p-3"/>
                <div className="ml-4 text-lg font-semibold text-gray-800">
                    <span> Maksymalna temperatura: {data.tempMax} °C </span>
                </div>
            </div>
            <div className="flex items-center bg-blue-200 justify-start">
                <FontAwesomeIcon icon={faTemperatureLow} className="text-blue-500 text-2xl p-3"/>
                <div className="ml-4 text-lg font-semibold text-gray-800">
                    <span> Minimalna temperatura: {data.tempMin} °C </span>
                </div>
            </div>
            <div className="flex items-center bg-blue-200 justify-start">
                <FontAwesomeIcon icon={faTemperatureLow} className="text-blue-500 text-2xl p-3"/>
                <div className="ml-4 text-lg font-semibold text-gray-800">
                    <span> Opady: {data.description} </span>
                </div>
            </div>

        </div>
    );
};

export default SummaryTable;