import { ButtonGroupProps } from "react-multi-carousel";
import { ChevronCircled } from "../../../docs/ChevronCircledIcon";

export const ButtonGroup = ({ next, previous, goToSlide, ...rest }:ButtonGroupProps) => {
  const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;
  console.log(rest)
  return (
    <div className="carousel-button-group"> 
      <button disabled={currentSlide === 0} className={`${currentSlide === 0 ? 'disable' : ''} inverted`  } onClick={() => previous()} ><ChevronCircled/></button>
      <button disabled={currentSlide === totalItems -slidesToShow - 1} className={currentSlide === totalItems - slidesToShow - 1 ? 'disable' : '' } onClick={() => next()} ><ChevronCircled/></button>
    </div>
  );
};