import { useState } from "react";
import { ChilsdArea } from "./ChilsdArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState('');

  const onClickCountup = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <input value />
      <br />
      <br />
      <button>表示</button>
      <ChilsdArea />
    </div>
  );
}
