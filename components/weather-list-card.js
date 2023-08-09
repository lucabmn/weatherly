"use client";

import { useEffect, useState } from "react";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function WeatherListCard() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const currentDate = new Date();
        const currentDayIndex = currentDate.getDay();

        const tempWeatherData = [
            { day: days[currentDayIndex], temperature: "2°C" },
            { day: days[(currentDayIndex + 1) % 7], temperature: "2°C" },
            { day: days[(currentDayIndex + 2) % 7], temperature: "2°C" },
            { day: days[(currentDayIndex + 3) % 7], temperature: "2°C" },
            { day: days[(currentDayIndex + 4) % 7], temperature: "2°C" },
            { day: days[(currentDayIndex + 5) % 7], temperature: "2°C" },
            { day: days[(currentDayIndex + 6) % 7], temperature: "2°C" },
        ];

        setWeatherData(tempWeatherData);
    }, []);

    return (
        <div className="absolute w-max left-50 top-60 grid grid-cols-7 pt-4 pb-4 gap-x-0 bg-gray-300 drop-shadow-lg rounded-md">
            {weatherData.map((dayData) => (
                <div
                    className="flex flex-col items-center p-1 h-14"
                    key={dayData.day}
                >
                    <span className="font-medium text-gray-700">{dayData.day}</span>
                    <span className="font-medium text-gray-500">{dayData.temperature}</span>
                </div>
            ))}
        </div>
    );
}
