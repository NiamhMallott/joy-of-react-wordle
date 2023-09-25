import React from "react";
import { checkGuess } from "../../game-helpers";

const rows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "Delete"],
];

export function Keyboard({ guesses, answer, onVirtualKeyPress }) {
  const usedKeys = guesses
    .flatMap((guess) => checkGuess(guess, answer))
    .reduce(
      (obj, { letter, status }) => ({
        ...obj,
        [letter.toLowerCase()]: chooseStatus(status, obj[letter.toLowerCase()]),
      }),
      {}
    );

  return (
    <div className="keyboard">
      {rows.map((row, i) => (
        <KeyRow
          key={i}
          row={row}
          usedKeys={usedKeys}
          onVirtualKeyPress={onVirtualKeyPress}
        />
      ))}
    </div>
  );
}

function KeyRow({ row, usedKeys, onVirtualKeyPress }) {
  return (
    <div className="keyboard-row">
      {row.map((key) => (
        <Key
          key={key}
          keyboardKey={key}
          status={usedKeys[key]}
          onVirtualKeyPress={onVirtualKeyPress}
        />
      ))}
    </div>
  );
}

function Key({ keyboardKey, status, onVirtualKeyPress }) {
  return (
    <button
      className={`keyboard-key ${status ?? ""}`}
      disabled={status === "incorrect"}
      onClick={() => onVirtualKeyPress(keyboardKey)}
    >
      {keyboardKey}
    </button>
  );
}

const chooseStatus = (next, prev) => {
  if (next === "correct") {
    return next;
  } else if (next === "misplaced" && prev !== "correct") {
    return next;
  } else if (next === "incorrect" && !prev) {
    return next;
  } else {
    return prev;
  }
};
