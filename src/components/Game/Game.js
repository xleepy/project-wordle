import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import Guesses from "./Guesses";
import { checkGuess } from "../../game-helpers";
import Banner from "./Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState(null);

  const addNextGuess = (guess) => {
    const validationResult = checkGuess(guess, answer);
    const newGuesses = [...guesses, validationResult];
    setGuesses(newGuesses);
    if (guess === answer) {
      setStatus("happy");
      return;
    }
    if (
      guesses.length >= 5 &&
      newGuesses.some((g) => !g.every((g) => g.status === "correct"))
    ) {
      setStatus("sad");
      return;
    }
  };
  return (
    <>
      <Guesses data={guesses} />
      <GuessInput isDisabled={!!status} onSubmit={addNextGuess} />
      {status && <Banner status={status} count={guesses.length} />}
    </>
  );
}

export default Game;
