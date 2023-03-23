import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleGame = () => {
    setGame({
      ...game,
      player: {
        name: "Bob",
      },
    });
  };

  return (
    <div>
      {game.player.name} <br /> <button onClick={handleGame}>Update</button>
    </div>
  );
}

export default App;
