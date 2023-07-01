import { StyleProvider } from "vcc-ui";
import { CarsList } from "../components/CarsList/CarsList";
import { useCars } from "../hooks/useCars";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { mockCars } from "../mocks/cars";
const mockedUseCars = useCars;

jest.mock("../hooks/useCars");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default wrapper;

describe("UseCars Hook", () => {
  it("should render cars when data exists", () => {
    (mockedUseCars as jest.Mock).mockImplementation(() => ({
      data: [...mockCars],
      isLoading: false,
    }));
    const {getByTestId, queryByTestId} = render(<CarsList />, { wrapper });
    const carousel = getByTestId('carousel-section')
    const loadingIcon = queryByTestId("rotating-lines-svg")
    
    expect(carousel).toBeInTheDocument();
    expect(loadingIcon).not.toBeInTheDocument()
  });
  it("should render the loading view", () => {
    (mockedUseCars as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: true,
    }));
    const {getByTestId, debug} = render(<CarsList />, { wrapper });
    const loadingIcon = getByTestId("rotating-lines-svg")

    expect(loadingIcon).toBeInTheDocument();
  });
  it("should render error message when data not exist data", () => {
    (mockedUseCars as jest.Mock).mockImplementation(() => ({
      data: [] || undefined,
      isLoading: false,
    }));
    const {getByText, debug} = render(<CarsList />, { wrapper });
    const erroMessage = getByText("Não há carros disponíveis no momento...")

    expect(erroMessage).toBeInTheDocument();
  });
});
