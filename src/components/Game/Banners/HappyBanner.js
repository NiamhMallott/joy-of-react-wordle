import React from "react";

export function HappyBanner({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses.length}</strong>.
      </p>
    </div>
  );
}
