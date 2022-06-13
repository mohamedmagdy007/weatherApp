import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecost({ title, items }) {
  return (
    <>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2"></hr>
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} alt="sun" className="w-20" />
            <p className="font-light text-sm">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Forecost;
