import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { Input } from "./Input";
import { PrevGuesses } from "./PrevGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { HappyBanner, SadBanner } from "./Banners";
import { Keyboard } from "../Keyboard/Keyboard";
import { RestartButton } from "./Banners";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [playerDidWin, setPlayerDidWin] = useState(false);

  console.log({ playerDidWin });

  return (
    <div>
      {guesses.length === NUM_OF_GUESSES_ALLOWED && !playerDidWin && (
        <SadBanner answer={answer} />
      )}
      {playerDidWin && <HappyBanner guesses={guesses} />}

      <PrevGuesses guesses={guesses} answer={answer} />

      <Input
        disabled={playerDidWin || guesses.length === NUM_OF_GUESSES_ALLOWED}
        guesses={guesses}
        answer={answer}
        onSubmit={(newGuess) => {
          setPlayerDidWin(newGuess === answer);
          setGuesses([...guesses, newGuess]);
        }}
      />
    </div>
  );
}

export default Game;
