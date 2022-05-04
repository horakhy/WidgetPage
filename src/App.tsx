import { useState } from "react";
import Widget from "./components/Widget";

interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return (
    <button
      className="bg-violet-500 p-2 px-4 h-10 rounded hover:bg-blue-500 transition-colors"
      onClick={() => console.log("E isso ae")}
    >
      {props.text}
    </button>
  );
}

function App() {
  return <Widget />;
}

export default App;
