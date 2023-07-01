import { Spinner } from "vcc-ui";
import { RotatingLines } from "react-loader-spinner";
import { useCars } from "../../hooks/useCars";
import { CarouselCars } from "../Carousel/CarouselCars";
import { mockCars } from "../../mocks/cars";
export function CarsList() {
  const { data, isLoading } = useCars();

  return (
    <>
      {isLoading && (
        <div className="center">
          <RotatingLines strokeColor="grey" width="40"/>
        </div>
      )}

      {data && data.length > 0 && <CarouselCars filteredCar={data} />}
      {data && data.length === 0 && (
        <h1>Não há carros disponíveis no momento...</h1>
      )}
    </>
  );
}
