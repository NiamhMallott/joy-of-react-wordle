import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { Guess } from "./Guess";
import { PrevGuesses } from "./PrevGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  return (
    <div>
      <Guess
        onSubmit={(newGuess) => {
          setGuesses([...guesses, newGuess]);
        }}
      />
      <PrevGuesses guesses={guesses} />
    </div>
  );
}

export default Game;
