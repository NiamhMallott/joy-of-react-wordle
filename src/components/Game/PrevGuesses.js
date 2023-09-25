import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { Guess, EmptyGuess } from "./Guess";

export function PrevGuesses({ guesses }) {
  // We want to render empty rows for any remaining guesses the user has to make.
  // Here we're working out how many empty rows we need to generate...
  const numEmptyGuesses = NUM_OF_GUESSES_ALLOWED - guesses.length;
  /// ...and then creating a new array filled with `numEmptyGuesses` empty strings.
  const emptyGuesses = Array.from({ length: numEmptyGuesses }, () => "");
  const allGuesses = [...guesses, ...emptyGuesses];

  return (
    <div className="guess-results">
      {allGuesses.map((guess, i) => {
        // When the guess string is empty we know it's a placeholder for an empty
        // guess and we should render an empty row instead.
        return guess !== "" ? (
          <Guess key={i} guess={guess} />
        ) : (
          <EmptyGuess key={i} />
        );
      })}
    </div>
  );
}
