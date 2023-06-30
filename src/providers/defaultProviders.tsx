import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { FilterContextProvider } from "../contexts/FilterContext";

interface DefaultProvidersProps {
  children: ReactNode;
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <StyleProvider>
          <FilterContextProvider>
            <ThemePicker variant="light">
              {children}
            </ThemePicker>
          </FilterContextProvider>
        </StyleProvider>
      </QueryClientProvider>
    </>
  );
}
