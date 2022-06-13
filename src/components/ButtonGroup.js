import React from "react";

const ButtonGroup = ({ children }) => {
  const cloneElement = React.Children.map(children, (child) => {
    console.log(child.props.children);
    const text = child.props.children;
    return React.cloneElement(
      child,
      {
        customClasses: child.props.customClasses,
        name: child.props.name,
        handlerUnitsChange: child.props.handlerUnitsChange,
      },
      text
    );
  });
  return (
    <div className="flex flex-row w-1/4 items-center justify-center">
      {cloneElement}
    </div>
  );
};
export default ButtonGroup;
