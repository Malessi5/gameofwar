import React from "react";

export default function Wins(props) {
  const {wins} = props;

  wins.sort((a, b) => b.totalWins - a.totalWins);

  return (
    <div style={{border: "black 1px solid"}}>
      <h4 style={{textAlign: "center"}}>Leaderboard</h4>
      <div className='score-container'>
        {wins.map((player, i) => {
          return (
            <div key={i} className='score'>
              <p>{`${i + 1}. ${player.name} - ${player.totalWins}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
