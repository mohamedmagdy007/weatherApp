import React, { useEffect, useState } from "react";
import Forecost from "./components/Forecost";
import Inputs from "./components/Inputs";
import getFormattedWeatherData from "./components/services/weatherService";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
function App() {
  const [query, setQuery] = useState({ q: "alexandria" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecost title="hourly forecost" />
          <Forecost title="daily forecost" />
        </>
      )}
    </div>
  );
}

export default App;
