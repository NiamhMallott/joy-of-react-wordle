import React, { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

export function RestartButton({ onRestart }) {
  return (
    <button className="restart" onClick={() => onRestart()}>
      <ReloadIcon width={25} height={25} />
    </button>
  );
}
