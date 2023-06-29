import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { StyleProvider, ThemePicker } from "vcc-ui";

interface DefaultProvidersProps {
  children: ReactNode;
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <StyleProvider>
          <ThemePicker variant="light">{children}</ThemePicker>
        </StyleProvider>
      </QueryClientProvider> 
    </>
  );
}
