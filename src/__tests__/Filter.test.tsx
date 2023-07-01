import { renderHook } from "@testing-library/react-hooks";

import { FilterContextProvider } from "../contexts/FilterContext";
import { useFilter } from "../hooks/useFilter";
import { act } from "react-dom/test-utils";
import { BodyType } from "../@types/car";

const wrapper = ({ children }: any) => (
  <FilterContextProvider>{children}</FilterContextProvider>
);
describe("Filter", () => {
  it("should render all by default", () => {
    const { result } = renderHook(() => useFilter(), { wrapper });
    const bodyType = result.current.bodyType;

    expect(bodyType).toBe("all");
  });
  it.each([BodyType.ESTATE, BodyType.SEDAN, BodyType.SUV])(
    "should change bodyType when was selected her option",
    (bodyType) => {
      const { result } = renderHook(() => useFilter(), { wrapper });
      act(() => {
        result.current.setBodyType(bodyType);
      });

      expect(result.current.bodyType).toBe(bodyType);
    }
  );
});
