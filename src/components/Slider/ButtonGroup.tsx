import { ButtonGroupProps } from "react-multi-carousel";
import { ChevronCircled } from "../../../docs/ChevronCircledIcon";

export const ButtonGroup = ({
  next,
  previous,
  goToSlide,
  ...rest
}: ButtonGroupProps | any) => {
  const {
    carouselState: { currentSlide, totalItems, slidesToShow },
  } = rest;
  const isDisabledPrevButton = currentSlide === 0 || totalItems === 2;
  const isDisabledNextButton = totalItems === 2 || currentSlide === totalItems - slidesToShow;
    
console.log(rest.carouselState)
  return (
    <div className="carousel-button-group">
      <button
        disabled={isDisabledPrevButton}
        className={`${isDisabledPrevButton ? "disable" : ""} inverted btn`}
        onClick={() => previous()}
      >
        <ChevronCircled />
      </button>
      <button
        disabled={isDisabledNextButton}
        className={`btn ${isDisabledNextButton ? "disable" : ""}`}
        onClick={() => next()}
      >
        <ChevronCircled />
      </button>
    </div>
  );
};
