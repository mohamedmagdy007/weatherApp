import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    { id: 1, title: "London" },
    { id: 2, title: "Paris" },
    { id: 3, title: "Cairo" },
    { id: 4, title: "Tokyo" },
    { id: 5, title: "Madrid" },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => setQuery({ q: city.title })}
          className="text-white text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
