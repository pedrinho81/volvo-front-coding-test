import { Spinner } from "vcc-ui";
import { useCars } from "../../hooks/useCars";
import { SliderCars } from "./SliderCars";
export function CarsList() {
  const { data, isLoading } = useCars();
  return (
    <>
      {isLoading && <Spinner />}

      {data && data.length > 0 && <SliderCars filteredCar={data} />}
      {data && data.length === 0 && (
        <h1>Não há carros disponíveis no momento...</h1>
      )}
    </>
  );
}
