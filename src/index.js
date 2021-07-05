import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App";
import { store, persistor } from "./redux/store";
import Spiner from "./components/spiner/Spiner";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spiner />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
