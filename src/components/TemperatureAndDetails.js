import React from "react";
import { FaTemperatureLow } from "react-icons/fa";
import { GiWindTurbine } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { BsFillSunFill } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex  items-center justify-center py-6 text-xl text-cyan-300 ">
        <p> Cloudy or whatever</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="https://media.wired.co.uk/photos/606db762e46630a583ab32e2/1:1/w_750,h_750,c_limit/sunmeta.jpg"
          alt="sun"
          className="w-20"
        />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureLow size={18} className="mr-1" />
            Real fell: <span className="font-medium ml-1">32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiHumidity size={25} className="mr-1" />
            Humidity: <span className="font-medium ml-1">32%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <GiWindTurbine size={18} className="mr-1" />
            Wind speed: <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <BsFillSunFill />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <BsSunsetFill />
        <p className="font-light">
          set: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <BsFillSunFill />
        <p className="font-light">
          High: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <BsFillSunFill />
        <p className="font-light">
          Low: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
