import { Spinner } from "vcc-ui";
import { RotatingLines } from "react-loader-spinner";
import { useCars } from "../../hooks/useCars";
import { SliderCars } from "../Slider/SliderCars";
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

      {data && data.length > 0 && <SliderCars filteredCar={data} />}
      {data && data.length === 0 && (
        <h1>Não há carros disponíveis no momento...</h1>
      )}
    </>
  );
}
