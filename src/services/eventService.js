const API_URL = process.env.REACT_APP_API_URL;

export async function getWeatherDaily(lat, lon) {
    const url = `${API_URL}/weather-daytoday?lat=${lat}&lon=${lon}`;
    //console.log("url: ", url);
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });

    if (!response.ok) {
        const errorText = await response.text(); // Get full response for debugging
        console.error("API error response:", errorText);
        throw new Error(`Failed to fetch Weather DayToDay: ${response.status}`);
    }
    const weatherDaily = await response.json();

    //console.log("daily: ", weatherDaily)

    const daysArray = Object.values(weatherDaily);
    //console.log("days array: ", daysArray);
    return daysArray;
}

export async function getWeatherSummary(lat, lon){

    const url = `${API_URL}/weather-summary?lat=${lat}&lon=${lon}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });

    const weatherSummary = await response.json();
    if (!response.ok) {
        throw new Error("Failed to fetch Weather DayToDay.");
    }
    //console.log("summary: ", weatherSummary);

    return {
        avgSunlight: weatherSummary.avgSunlight,
        avgPressure: weatherSummary.avgPressure,
        tempMin: weatherSummary.tempMin,
        tempMax: weatherSummary.tempMax,
        description: weatherSummary.rain
    };
}