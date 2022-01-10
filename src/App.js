import React from "react";
import { Provider } from "react-redux";
import Routers from "./routers";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}
