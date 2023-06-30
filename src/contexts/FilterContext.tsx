import {  ReactNode, createContext, useState } from "react";
import { BodyType } from "../@types/car";

export const FilterContext = createContext({
  bodyType: BodyType.ALL,
  setBodyType: (value: BodyType) => {}
});

interface ProviderProps {
  children: ReactNode;
}
export function FilterContextProvider({ children }: ProviderProps) {
  const [bodyType, setBodyType] = useState(BodyType.ALL);
  return (
    <FilterContext.Provider
      value={{ 
        bodyType, 
        setBodyType }}
    >
      {children}
    </FilterContext.Provider>
  );
}
