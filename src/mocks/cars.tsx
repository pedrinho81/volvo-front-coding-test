import cars from '../../public/api/cars.json'
import { Car } from '../@types/car'
let JSONCars = JSON.stringify(cars)
export const mockCars = JSON.parse(JSONCars) as Car[]
