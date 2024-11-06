import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return { backgroundColor: snap.color, color: "white" };
    }
  };
  return (
    <button
      className={`px-3 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
