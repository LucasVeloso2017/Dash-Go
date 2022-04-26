import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { SidebarDrawerProvider } from "../context/SidebarDrawerContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider options={theme}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </ColorModeProvider>
  );
}

export default MyApp;
