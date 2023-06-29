import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../constants";
import { Car } from "../types/car";
export function useCar(id:string) {
  const fetcher = async (): AxiosPromise<Car[]> => {
    return axios.get(`${API_URL}/`);
  };
  const { data, isLoading } = useQuery({
    queryFn: () => fetcher(),
    queryKey: ["product", id],
    staleTime: 1000 * 60 * 5,
  });
  console.log(data)
  const carts = data?.data.find((car) => id  === car.id)
  console.log(carts)
  return {
    data: carts,
    isLoading,
  };
}
