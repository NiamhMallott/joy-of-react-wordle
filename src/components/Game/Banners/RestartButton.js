import React, { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

export function RestartButton() {
  const [restartGame, setRestartGame] = useState();

  return (
    <button
      className="restart" /*onClick={(event) => {
            setRestartGame = event.value.target
        }}*/
    >
      <ReloadIcon width={25} height={25} />
    </button>
  );
}
