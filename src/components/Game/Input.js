import React, { useState, useRef, useCallback } from "react";
import { Keyboard } from "../Keyboard";

export function Input({ onSubmit, disabled, guesses, answer }) {
  const [userInput, setUserInput] = useState("");
  const ref = useRef(null);
  const handleOnSubmit = useCallback(
    (event) => {
      if (event) event.preventDefault();
      if (userInput.length === 5) {
        onSubmit(userInput);
        setUserInput("");
      }
    },
    [userInput, onSubmit]
  );

  return (
    <>
      <form ref={ref} className="guess-input-wrapper" onSubmit={handleOnSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={disabled}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          value={userInput}
          onChange={(event) => {
            setUserInput(event.target.value.toUpperCase());
          }}
        />
      </form>

      <Keyboard
        guesses={guesses}
        answer={answer}
        onVirtualKeyPress={(key) => {
          switch (key) {
            case "Enter":
              handleOnSubmit();
              return;

            case "Delete":
              setUserInput(userInput.slice(0, userInput.length - 1));
              return;

            default:
              setUserInput((userInput) =>
                userInput.length < 5 ? userInput + key.toUpperCase() : userInput
              );
          }
        }}
      />
    </>
  );
}
