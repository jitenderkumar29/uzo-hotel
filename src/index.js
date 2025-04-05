import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StateStore } from "./Context/AppContext";

import App from "./App";
import ScrollToTop from "./Components/_ScrollToTop";
// import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <StateStore>
        <ScrollToTop />
        {/* <ChakraProvider> */}
        <App />
        {/* </ChakraProvider> */}
      </StateStore>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
