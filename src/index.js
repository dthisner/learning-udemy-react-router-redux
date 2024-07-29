import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./Components/App";
import rootsReducer from "./redux/reducer";
import "./styles/stylesheet.css";

const store = configureStore({
  reducer: rootsReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
