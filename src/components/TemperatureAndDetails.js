import React from "react";
import { FaTemperatureLow } from "react-icons/fa";
import { GiWindTurbine } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { BsFillSunFill } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    sunrise,
    sunset,
    timezone,
    speed,
    dt,
  },
}) {
  return (
    <div>
      <div className="flex  items-center justify-center py-6 text-xl text-cyan-300 ">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="sun" className="w-20" />
        <p className="text-5xl">{`${temp}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureLow size={18} className="mr-1" />
            Real fell:{" "}
            <span className="font-medium ml-1">{`${feels_like}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiHumidity size={25} className="mr-1" />
            Humidity: <span className="font-medium ml-1">{`${humidity}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <GiWindTurbine size={18} className="mr-1" />
            Wind: <span className="font-medium ml-1">{`${speed}km/h`} </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <BsFillSunFill size={25} />
        <p className="font-light">
          Rise:
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <BsSunsetFill size={25} />
        <p className="font-light">
          set:
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <BsFillSunFill size={25} />
        <p className="font-light">
          High:
          <span className="font-medium ml-1">{`${temp_max}°`}</span>
        </p>
        <p className="font-light">|</p>
        <BsFillSunFill size={25} />
        <p className="font-light">
          Low:
          <span className="font-medium ml-1">{`${temp_min}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
