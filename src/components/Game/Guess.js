import React from "react";
import { range } from "../../utils";

const cells = range(0, 5);

function Guess({ value, validationResult }) {
  return (
    <p className="guess">
      {cells.map((cell) => {
        const validation = validationResult?.[cell];
        const char = value?.charAt(cell) ?? "";
        return (
          <span key={cell} className={`cell ${validation?.status ?? ""}`}>
            {char}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
