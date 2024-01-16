import React from "react";
import Player from "./Player";
import players from "./players";
import "./App.css"

const PlayersList = () => {
  return (
    <div style={{  }} className="list">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;