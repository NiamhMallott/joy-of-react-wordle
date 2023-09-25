import React, { useState } from "react";

export function Guesses() {
  const [userInput, setUserInput] = useState("");

  return (
    <form class="guess-input-wrapper">
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />
    </form>
  );
}
