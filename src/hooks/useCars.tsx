import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../constants";
import { Car } from "../types/car";
export function useCars() {
  const fetcher = async (): AxiosPromise<Car[]> => {
    return axios.get(API_URL);
  };
  const { data, isLoading } = useQuery({
    queryFn: () => fetcher(),
    queryKey: ["products"],
    staleTime: 1000 * 60 * 5,
  });
  console.log(data)
  const carts = data?.data
  console.log(carts)
  return {
    data: carts,
    isLoading,
  };
}
