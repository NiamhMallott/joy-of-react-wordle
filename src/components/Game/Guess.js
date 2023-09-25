import React, { useState } from "react";

export function Guess({ onSubmit }) {
  const [userInput, setUserInput] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(userInput);
        onSubmit(userInput);
        setUserInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={userInput}
        onChange={(event) => {
          setUserInput(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}
