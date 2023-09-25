import React from "react";
import { RestartButton } from "./RestartButton";

export function HappyBanner({ guesses, onRestart }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guesses.length}</strong>.
        <RestartButton onRestart={onRestart} />
      </p>
    </div>
  );
}
