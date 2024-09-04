import React from "react";
import { range } from "../../utils";

const cells = range(0, 5);

function Guess({ value }) {
  return (
    <p className="guess">
      {cells.map((cell) => {
        const { letter = "", status } = value?.[cell] ?? {};
        return (
          <span key={cell} className={`cell ${status ?? ""}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
