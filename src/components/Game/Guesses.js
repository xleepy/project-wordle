import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "./Guess";

function Guesses({ data }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((id) => {
        const guess = data[id];
        return (
          <Guess
            key={id}
            value={guess?.value}
            validationResult={guess?.validationResult}
          />
        );
      })}
    </div>
  );
}

export default Guesses;
