import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes";
import GlobalStyles from "./styles/global";
import Header from "./Components/Header";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
