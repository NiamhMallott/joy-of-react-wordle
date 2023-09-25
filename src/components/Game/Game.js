import React, { useState, useCallback } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { Input } from "./Input";
import { PrevGuesses } from "./PrevGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { HappyBanner, SadBanner } from "./Banners";
import { Keyboard } from "../Keyboard/Keyboard";
import { RestartButton } from "./Banners";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [playerDidWin, setPlayerDidWin] = useState(false);
  const restart = useCallback(() => {
    setGuesses([]);
    setPlayerDidWin(false);
    setAnswer(sample(WORDS));
  }, []);

  console.info({ answer });

  return (
    <div>
      {guesses.length === NUM_OF_GUESSES_ALLOWED && !playerDidWin && (
        <SadBanner answer={answer} onRestart={restart} />
      )}
      {playerDidWin && <HappyBanner guesses={guesses} onRestart={restart} />}

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
