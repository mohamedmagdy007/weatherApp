import React, { useEffect, useState, useRef } from "react";
import Forecost from "./components/Forecost";
import Inputs from "./components/Inputs";
import getFormattedWeatherData from "./components/services/weatherService";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [query, setQuery] = useState({ q: "alexandria" });
  const queryUseRef = useRef();
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    queryUseRef.current = query;
  });
  const prevQuery = queryUseRef.current;
  useEffect(() => {
    const message = query.q ? query.q : "current location.";
    toast.info("Fetching weather for" + message);

    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      });
    };

    if (weather != null) {
      if (query) {
        fetchWeather();
      }
    } else if (prevQuery !== queryUseRef) {
      const clearSettimeout = setTimeout(() => {
        if (query) {
          fetchWeather();
        }
      }, 1500);
      return () => {
        clearTimeout(clearSettimeout);
      };
    }
  }, [query, units]);
  const foramtBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 30 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${foramtBackground()} h-fit shadow-xl shadow-gray-400`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecost title="hourly forecost" items={weather.hourly} />
          <Forecost title="daily forecost" items={weather.daily} />
        </>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
