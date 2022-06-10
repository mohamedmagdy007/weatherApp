import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  // const [city, setCity] = useState("");
  // const handlerSearchClick = () => {
  //   if (city !== "") setQuery({ q: city });
  // };
  const handlerUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };
  const handlerSearchInput = (e) => {
    console.log(e.currentTarget.value);
    // setCity(e.currentTarget.value);
    setQuery({ q: e.currentTarget.value });
  };
  const handlerLocation = () => {
    if (navigator.geolocation) {
      // toast.info("Fetching users Location.");
      navigator.geolocation.getCurrentPosition((position) => {
        // toast.success("Location Fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="search for city.."
          onChange={handlerSearchInput}
          // value={city}
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none placeholder:lowercase capitalize"
        />
        {/* <BiSearch
          size={25}
          // onClick={handlerSearchClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        /> */}
        <MdOutlineLocationOn
          size={25}
          onClick={handlerLocation}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          onClick={handlerUnitsChange}
          className="text-xl text-white font-light transition ease-out hover:scale-125"
        >
          °C
        </button>
        <p className="text-xl text-white mx-1"> | </p>
        <button
          name="imperial"
          onClick={handlerUnitsChange}
          className="text-xl text-white font-light transition ease-out hover:scale-125"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
