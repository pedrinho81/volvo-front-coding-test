import { useState } from "react";
import { BodyType } from "../../@types/car";
import { useFilter } from "../../hooks/useFilter";
import { Block, SelectInput } from "vcc-ui";

export function Filter() {
  const { setBodyType, bodyType } = useFilter();
  return (
    <Block extend={{maxWidth: '300px', margin: '1rem auto 0 auto'}}>
      <SelectInput
    label={'Body Type'}
    value={bodyType}
    onChange={(e) => setBodyType(e.target.value as BodyType)}
  >
    <option value={BodyType.ALL}>Todos</option>
    <option value={BodyType.SEDAN}>Sedan</option>
    <option value={BodyType.ESTATE}>Estate</option>
    <option value={BodyType.SUV}>SUV</option>
  </SelectInput>
    </Block>
    

  );
}
