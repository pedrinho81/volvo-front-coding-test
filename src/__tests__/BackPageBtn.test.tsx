import { render, fireEvent } from "@testing-library/react";

import { useRouter } from "next/router";

import { BackBtn } from "../components/BackPageBtn";

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
describe("BackPageBtn", () => {
  it("should redirect correctly by prop", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));
    const { getByRole } = render(<BackBtn navigate="/teste" />);
    const backBtn = getByRole("button");
    expect(backBtn).toBeInTheDocument();
    fireEvent.click(backBtn);
    expect(push).toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith("/teste");
  });
  it("should render back icon", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));
    const { getByTestId } = render(<BackBtn navigate="/teste" />);
    const backBtn = getByTestId("svg-icon");
    expect(backBtn).toBeInTheDocument();
  });
});
