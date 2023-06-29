import { useRef } from "react";
import { Car } from "../../types/car";
import { CarCard } from "./CarCard";
import { Text } from "vcc-ui";
import {ButtonGroup} from './ButtonGroup'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronCircled } from "../../../docs/ChevronCircledIcon";

interface SliderProps {
  filteredCar: Car[];
}

export function SliderCars({ filteredCar }: SliderProps) {
  const responsive = {
    Desktop: {
      breakpoint: { max: 3000, min: 1320 },
      items: 4,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <>
    <Carousel
      swipeable={true}
      draggable={false}
      responsive={responsive}
      infinite={false}
      ssr={true} 
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      arrows={false}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      renderButtonGroupOutside={true} 
      customButtonGroup={<ButtonGroup />}
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
        </>
  );
}
/* filteredCar.length < 4 ? filteredCar.length : 4, */
