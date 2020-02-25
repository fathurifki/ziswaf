import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "./utils/logger";
import rootReducer from "./reducers";
import Routes from "./routes";

const composedEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  undefined,
  composedEnhancers(applyMiddleware(loggerMiddleware, thunkMiddleware))
);

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};