import React from "react";
import Player from "./Player";
import players from "../players"; // Import players data
import "../App.css"; // Import the custom styles

const PlayersList = () => {
  return (
    <div className="players-list">
      {players.map(player => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
