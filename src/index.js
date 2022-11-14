import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

import "./index.css";
import movies from "./reducers/index";
import App from "./components/App";

const store = createStore(movies);
// console.log("store", store);
// console.log("After State", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "SuperMan" }],
// });
// console.log("Before State", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
