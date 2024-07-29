import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";

import App from "./Components/App";
import rootReducer from "./redux/reducer"; // Make sure this path is correct
import "./styles/stylesheet.css";

// Configure store with Redux DevTools
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(immutableStateInvariantMiddleware()),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development mode
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
