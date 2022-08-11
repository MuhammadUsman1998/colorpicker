import "./App.css";
import React from "react";
import ColorPicker from "./colorPicker";
import { PhotoshopPicker } from "react-color";
function App() {
  return (
    <div className='App'>
      <h1> {ColorPicker(<PhotoshopPicker />)}</h1>
    </div>
  );
}

export default App;
