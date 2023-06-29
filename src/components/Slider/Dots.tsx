import React from "react";

export const CustomDot = ({ onClick = () => {}, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
    data,
  } = rest;
  const carouselItems = ['', '', ''];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
    >
            {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};
