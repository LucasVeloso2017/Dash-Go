import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { SidebarDrawerProvider } from "../context/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/queryClient";
if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
