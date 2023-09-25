import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { Input } from "./Input";
import { PrevGuesses } from "./PrevGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  return (
    <div>
      <Input
        onSubmit={(newGuess) => {
          // Prevent the user submitting more guesses once the max number of
          // guesses is hit.
          if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
            setGuesses([...guesses, newGuess]);
          }
        }}
      />
      <PrevGuesses guesses={guesses} answer={answer} />
    </div>
  );
}

export default Game;
