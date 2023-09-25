import React from "react";
import { RestartButton } from "./RestartButton";

export function SadBanner({ answer, onRestart }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
        <RestartButton onRestart={onRestart} />
      </p>
    </div>
  );
}
