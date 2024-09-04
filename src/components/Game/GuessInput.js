import React, { useRef } from "react";

function GuessInput({ onSubmit, isDisabled }) {
  const inputRef = useRef(null);
  const submit = (event) => {
    event.preventDefault();
    const guess = inputRef.current.value.toUpperCase();
    console.log({ guess });
    onSubmit(guess);
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={submit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={isDisabled}
        minLength={5}
        maxLength={5}
        ref={inputRef}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
