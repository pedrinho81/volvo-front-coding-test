import { useState } from "react";
import { BodyType } from "../../@types/car";
import { useFilter } from "../../hooks/useFilter";
export function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const {setBodyType} = useFilter()
  return (
    <>
    <select defaultValue={BodyType.ALL}>
    <option onClick={() =>  setBodyType(BodyType.ALL)}>{BodyType.ALL}</option>
    <option onClick={() =>  setBodyType(BodyType.ESTATE)}>{BodyType.ESTATE}</option>
    <option onClick={() =>  setBodyType(BodyType.SEDAN)}>{BodyType.SEDAN}</option>
    <option onClick={() =>  setBodyType(BodyType.SUV)}>{BodyType.SUV}</option>
    </select>
    </>
  )
}