import React from "react";
import ReactDOM from "react-dom/client";
import "./access/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducers from "./component/reducers";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
