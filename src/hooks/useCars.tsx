import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../constants";
import { BodyType, Car } from "../@types/car";
import { useFilter } from "./useFilter";
export function useCars() {
  const { bodyType } = useFilter();
  console.log(bodyType);
  const fetcher = async (): AxiosPromise<Car[]> => {
    return axios.get(API_URL);
  };
  const { data, isLoading } = useQuery({
    queryFn: () => fetcher(),
    queryKey: ["products"],
    staleTime: 1000 * 60 * 5,
  });
  let Allcars = data?.data;

  let filteredCarts = Allcars?.filter((car) => {
    if(bodyType === BodyType.ALL) {
      return Allcars
    }
    return car.bodyType === bodyType;
  });

  console.log(filteredCarts);
  return {
    data: filteredCarts,
    isLoading,
  };
}
