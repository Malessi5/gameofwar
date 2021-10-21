import React from "react";
import Turn from "./Turn";

export default function GameInfo(props) {
  const {moves} = props;
  return (
    <div className='game-container'>
      {moves.map((turn, i) => {
        return <Turn cards={turn} key={i} turn={turn.round} />;
      })}
    </div>
  );
}
