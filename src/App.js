import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <LanguageProvider>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
