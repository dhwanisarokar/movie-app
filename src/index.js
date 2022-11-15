import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";

import "./index.css";
import rootReducer from "./reducers/index";
import App from "./components/App";

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       // middleware code
//       // console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) =>
    next(action);

const store = createStore(rootReducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
