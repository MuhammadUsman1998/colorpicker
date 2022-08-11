import React, { useState } from "react";
import { PhotoshopPicker } from "react-color";
import "./App.css";

export default function ColorPicker() {
  const [colorPicker, setColorPicker] = useState("#9A995A");
  return (
    <div>
      <div className='color'>
        <PhotoshopPicker
          color={colorPicker}
          onChange={(color) => {
            setColorPicker(color.hex);
          }}
        />
      </div>
    </div>
  );
}
