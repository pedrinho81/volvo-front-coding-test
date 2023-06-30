import { render, fireEvent } from "@testing-library/react";

import { useRouter } from "next/router";

import { BackBtn } from "../components/BackPageBtn";

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
describe("CarsList", () => {
  it("should render correctly props", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));
    const { getByRole } = render(<BackBtn navigate="/teste" />);
    const cartLink = getByRole("button");
    expect(cartLink).toBeInTheDocument();
    fireEvent.click(cartLink);
    expect(push).toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith("/teste");
  });
});
