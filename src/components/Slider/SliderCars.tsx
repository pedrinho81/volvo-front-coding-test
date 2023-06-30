import { Car } from "../../@types/car";
import { CarCard } from "../CarsList/CarCard";
import {ButtonGroup} from './ButtonGroup'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomDot } from "./Dots";
import { useCars } from "../../hooks/useCars";
interface SliderProps {
  filteredCar: Car[];
}

export function SliderCars({ filteredCar }: SliderProps) {
  const {data} = useCars()
  const responsive = {
    lgDesktop: {
      breakpoint: { max: 3000, min: 1400},
      items: filteredCar.length < 4 ? filteredCar.length : 3.99,
    },
    mdDesktop: {
      breakpoint: { max: 1400, min: 1000 },
      items: filteredCar.length < 4 ? filteredCar.length : 2.8,
    },
    smDesktop: {
      breakpoint: { max: 1000, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 767, min: 470 },
      items: 1.8,
    },
    mobile: {
      breakpoint: { max: 470, min: 0 },
      items: 1.2,

    }
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
      showDots
      customButtonGroup={<ButtonGroup />}
      customDot={<CustomDot />}
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
