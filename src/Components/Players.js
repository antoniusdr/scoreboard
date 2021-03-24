import React from "react";

const Players = ({ playername }) => {
  return (
    <div>
      <li>
        <p>{playername}</p>
      </li>
    </div>
  );
};

export default Players;
