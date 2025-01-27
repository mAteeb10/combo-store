import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ComboSelector } from "./components/ComboSelector";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Combo Selector</h1>
        <ComboSelector />
      </div>
    </Provider>
  );
}

export default App;
