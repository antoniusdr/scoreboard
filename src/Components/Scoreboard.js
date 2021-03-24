import { React, useState } from "react";
import Player from "./Players";

const Scoreboard = (props) => {
  const totalPlayers = [
    { id: 1, name: "Test 1", score: 1 },
    { id: 2, name: "Test 2", score: 2 },
    { id: 3, name: "Test 2", score: 3 },
    { id: 4, name: "Test 4", score: 4 },
  ];
  return (
    <div>
      <main>
        <p>These are the players' score:</p>
        <ul>
          <Player playername="Test 1" />
          <Player playername="Test 2" />
          <Player playername="Test 3" />
          <Player playername="Test 4" />
        </ul>
      </main>
    </div>
  );
};

export default Scoreboard;
