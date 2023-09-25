import React, { useState } from "react";

export function Guesses() {
  return (
    <form class="guess-input-wrapper">
      <label for="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" />
    </form>
  );
}
