import React from "react";

function Button({ customClasses, children, handlerUnitsChange, name }) {
  return (
    <button
      className={`${customClasses ? "button" + customClasses : "button"}`}
      onClick={handlerUnitsChange}
      name={name}
    >
      {children}
    </button>
  );
}

export default Button;
