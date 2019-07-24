import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyles from "./styles/global";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
