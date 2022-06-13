import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

function Inputs({ setQuery, units, setUnits }) {
  const handlerUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };
  const handlerSearchInput = (e) => {
    setQuery({ q: e.currentTarget.value });
  };
  const handlerLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
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
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none placeholder:lowercase capitalize"
        />
        <MdOutlineLocationOn
          size={25}
          onClick={handlerLocation}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <ButtonGroup>
        <Button
          name="metric"
          handlerUnitsChange={handlerUnitsChange}
          customClasses="text-xl text-white font-light transition duration-200 ease-out hover:scale-125 mr-2"
        >
          °C
        </Button>
        <Button
          name="imperial"
          handlerUnitsChange={handlerUnitsChange}
          customClasses="text-xl text-white font-light transition duration-200 ease-out hover:scale-125"
        >
          °F
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Inputs;
