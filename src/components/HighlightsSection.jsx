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
        <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col shadow-[4px_8px_16px_rgba(0,0,0,0.15)]">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Today's Highlights</h2>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <HighlightCard title="UV Index" icon={<FiSun className="h-5 w-5" />} value={current.uv} />
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
                                <span className="font-bold text-2xl text-gray-900 dark:text-white">{today.sunrise}</span>
                            </div>
                            <div className="flex items-center justify-start mt-2 gap-x-8">
                                <FiSunset className="h-8 w-8 text-orange-500" />
                                <span className="font-bold text-2xl text-gray-900 dark:text-white">{today.sunset}</span>
                            </div>
                        </>
                    }
                />
                <HighlightCard
                    title="Precipitation"
                    icon={<LiaCloudRainSolid className="h-5 w-5 text-gray-500" />}
                    value={current.precip_mm}
                    unit="mm"
                />
                <HighlightCard
                    title="Pressure"
                    icon={<ArrowTrendingUpIcon className="h-5 w-5" />}
                    value={current.pressure_mb}
                    unit="mb"
                />
                <HighlightCard
                    title="Humidity"
                    icon={<ArrowDownCircleIcon className="h-5 w-5" />}
                    value={current.humidity}
                    unit="%"
                />
            </div>
        </div>
    );
}
