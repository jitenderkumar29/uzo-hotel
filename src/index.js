import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StateStore } from "./Context/AppContext";

import App from "./App";
import ScrollToTop from "./Components/_ScrollToTop";
import { ThemeProvider } from "./Context/ThemeContext";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import "./i18n"; // Import i18n configuration
import LanguageSelector from "./Components/languageSelector/LanguageSelector";
// import LanguageSelector from "./Components/languageSelector/LanguageSelector";

// import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    {/* <LanguageSelector> */}
    <ThemeProvider>
      <StrictMode>
        <BrowserRouter>
          <StateStore>
            <ScrollToTop />
            {/* <ChakraProvider> */}

            <App />
            {/* <LanguageSelector /> */}
            {/* </ChakraProvider> */}
          </StateStore>
        </BrowserRouter>
      </StrictMode>
    </ThemeProvider>
    {/* </LanguageSelector> */}
  </I18nextProvider>,
  document.getElementById("root")
);
