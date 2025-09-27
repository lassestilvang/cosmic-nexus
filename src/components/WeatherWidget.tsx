'use client';

import { motion } from 'framer-motion';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

interface WeatherData {
  current: {
    temp: number;
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
  };
  daily: Array<{
    dt: number;
    temp: {
      day: number;
    };
    weather: Array<{
      main: string;
      icon: string;
    }>;
  }>;
}

const fetcher = (url: string): Promise<WeatherData> => fetch(url).then(res => res.json());

export default function WeatherWidget() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          // Fallback to Copenhagen if geolocation fails
          setLocation({ lat: 55.6761, lon: 12.5683 });
        }
      );
    } else {
      setLocation({ lat: 55.6761, lon: 12.5683 });
    }
  }, []);

  const { data, error, isLoading } = useSWR<WeatherData>(
    location
      ? `/api/weather?lat=${location.lat}&lon=${location.lon}`
      : null,
    fetcher,
    {
      refreshInterval: 300000, // 5 minutes
      revalidateOnFocus: false,
    }
  );

  if (error) {
    return (
      <div className="bg-gradient-to-br from-cosmic-blue to-holographic-purple/20 p-4 rounded-xl border border-neon-cyan/20">
        <p className="text-neon-cyan/70 text-sm">Failed to load weather data</p>
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className="bg-gradient-to-br from-cosmic-blue to-holographic-purple/20 p-4 rounded-xl border border-neon-cyan/20">
        <div className="animate-pulse">
          <div className="h-4 bg-neon-cyan/20 rounded mb-2"></div>
          <div className="h-8 bg-neon-cyan/20 rounded mb-2"></div>
          <div className="h-4 bg-neon-cyan/20 rounded"></div>
        </div>
      </div>
    );
  }

  console.log('Weather data:', data); // Debug log to validate data structure
  if (!data.daily) {
    console.error('No daily forecast data available:', data);
    return (
      <div className="bg-gradient-to-br from-cosmic-blue to-holographic-purple/20 p-4 rounded-xl border border-neon-cyan/20">
        <p className="text-neon-cyan/70 text-sm">Forecast data not available</p>
      </div>
    );
  }
  const current = data.current;
  const forecast = data.daily.slice(0, 3); // Next 3 days

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-cosmic-blue to-holographic-purple/20 p-6 rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-neon-cyan">Current Weather</h3>
        <div className="text-3xl">
          {current.weather[0].icon && (
            <img
              src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
              alt={current.weather[0].description}
              className="w-12 h-12"
            />
          )}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-3xl font-bold text-organic-green mb-1">
          {Math.round(current.temp)}°C
        </div>
        <div className="text-neon-cyan/80 capitalize">
          {current.weather[0].description}
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-holographic-purple">3-Day Forecast</h4>
        <div className="grid grid-cols-3 gap-2">
          {forecast.map((day, index) => (
            <div key={day.dt} className="text-center">
              <div className="text-xs text-neon-cyan/60 mb-1">
                {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].main}
                className="w-8 h-8 mx-auto mb-1"
              />
              <div className="text-sm font-semibold text-organic-green">
                {Math.round(day.temp.day)}°
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}