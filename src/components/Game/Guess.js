import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

export function Guess({ guess, answer }) {
  const letters = checkGuess(guess, answer);

  return (
    <p className="guess">
      {letters.map(({ letter, status }, i) => {
        return (
          <span key={i} className={`cell ${status}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export function EmptyGuess() {
  return (
    <p className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
  );
}
