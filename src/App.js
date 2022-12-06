import { EuiProvider } from "@elastic/eui";
import React from "react";
import "@elastic/eui/dist/eui_theme_dark.css";
import MainPage from "./components/MainPage";
import "./App.css";




function App() {

  return (
    <>
    <EuiProvider colorMode="dark">
      <MainPage />
    </EuiProvider>
    </>
  );
}

export default App;
