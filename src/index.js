import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

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
// this is currying function
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) =>
    next(action);

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export const StoreContent = createContext();

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContent.Provider value={store}>
        {this.props.children}
      </StoreContent.Provider>
    );
  }
}

export default Provider;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </React.StrictMode>
);
