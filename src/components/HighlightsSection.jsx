// src/components/HighlightsSection.jsx
import React from 'react';
import HighlightCard from './HighlightCard';
import {
    SunIcon,
    ArrowPathIcon,
    ArrowTrendingUpIcon,
    EyeDropperIcon,
    ArrowDownCircleIcon,
    ArrowUpCircleIcon,
} from '@heroicons/react/24/outline';
import { FiSun, FiSunrise, FiSunset } from "react-icons/fi";
import { FaWind } from "react-icons/fa";
import { LiaCloudRainSolid } from "react-icons/lia";

export default function HighlightsSection({ current, forecast, location }) {
    const today = forecast?.forecastday?.[0]?.astro || {};
    return (
        <div className="h-full bg-gray-100 dark:bg-gray-800 rounded-xl p-8 flex flex-col shadow-[4px_4px_8px_rgba(0,1,0,1)] dark:shadow-[0_4px_12px_rgba(1,0,0,1)]">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Today's Highlights</h2>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <HighlightCard
                    title="UV Index"
                    icon={<FiSun className="h-5 w-5" />}
                    value={current.uv}
                    extra={(() => {
                        const uv = current.uv;
                        if (uv <= 2) return "Low";
                        if (uv <= 5) return "Moderate";
                        if (uv <= 7) return "High";
                        if (uv <= 10) return "Very High";
                        return "Extreme";
                    })()} />
                <HighlightCard
                    title="Wind Status"
                    icon={<FaWind className="h-5 w-5" />}
                    value={current.wind_kph}
                    unit="km/h"
                    extra={`Direction: ${current.wind_dir}`}
                />
                <HighlightCard
                    title="Sunrise & Sunset"
                    icon={null}
                    value=""
                    extra={
                        <>
                            <div className="flex items-center justify-start gap-x-8">
                                <FiSunrise className="h-8 w-8 text-yellow-500" />
                                {(() => {
                                    const [time, unit] = today.sunrise.split(' ');
                                    return (
                                        <span className="font-bold text-2xl text-gray-900 dark:text-white">
                                            {time}
                                            <span className="text-lg font-medium lowercase text-gray-600 dark:text-gray-400 pl-1">{unit}</span>
                                        </span>
                                    );
                                })()}
                            </div>
                            <div className="flex items-center justify-start mt-2 gap-x-8">
                                <FiSunset className="h-8 w-8 text-orange-500" />
                                {(() => {
                                    const [time, unit] = today.sunset.split(' ');
                                    return (
                                        <span className="font-bold text-2xl text-gray-900 dark:text-white">
                                            {time}
                                            <span className="text-lg font-medium lowercase text-gray-600 dark:text-gray-400 pl-1">{unit}</span>
                                        </span>
                                    );
                                })()}
                            </div>
                        </>
                    }
                />

                <HighlightCard
                    title="Precipitation"
                    icon={<LiaCloudRainSolid className="h-5 w-5 text-gray-500" />}
                    value={current.precip_mm}
                    unit="mm"
                    extra={(() => {
                        const rain = current.precip_mm;
                        if (rain === 0) return "No rain";
                        if (rain <= 2.5) return "Light rain";
                        if (rain <= 7.6) return "Moderate rain";
                        if (rain <= 50) return "Heavy rain";
                        return "Very heavy rain";
                    })()}
                />
                <HighlightCard
                    title="Pressure"
                    icon={<ArrowTrendingUpIcon className="h-5 w-5" />}
                    value={current.pressure_mb}
                    unit="mb"
                    extra={
                        (() => {
                            const pressure = current.pressure_mb;
                            if (pressure < 1000) return "Low pressure – Rain likely";
                            if (pressure <= 1015) return "Normal pressure";
                            return "High pressure – Clear skies";
                        })()
                    }
                />
                <HighlightCard
                    title="Humidity"
                    icon={<ArrowDownCircleIcon className="h-5 w-5" />}
                    value={current.humidity}
                    unit="%"
                    extra={
                        (() => {
                            const humidity = current.humidity;
                            if (humidity <= 30) return "Dry air";
                            if (humidity <= 60) return "Comfortable";
                            if (humidity <= 80) return "Humid";
                            return "Very humid";
                        })()
                    }
                />
            </div>
        </div>
    );
}
