import { useRef } from "react";
import { Car } from "../../types/car";
import { CarCard } from "./CarCard";
import { Text } from "vcc-ui";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface SliderProps {
  filteredCar: Car[];
}

export function SliderCars({ filteredCar }: SliderProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      
      ssr={true} // means to render carousel on server-side.
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {filteredCar.map((car) => (
        <CarCard
          key={car.id}
          id={car.id}
          bodyType={car.bodyType}
          imageUrl={car.imageUrl}
          modelName={car.modelName}
          modelType={car.modelType}
        />
      ))}
    </Carousel>
  );
}
/* filteredCar.length < 4 ? filteredCar.length : 4, */
