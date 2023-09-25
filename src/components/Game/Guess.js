import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export function Guess({ guess }) {
  const letters = guess.split("");

  return (
    <p className="guess">
      {letters.map((letter, i) => {
        return (
          <span key={i} className="cell">
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
