import React, {useState, useEffect} from "react";
import axios from "axios";
import GameInfo from "./GameInfo";
import Wins from "./Wins";

export default function Main() {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);
  const [gameInfo, setGameInfo] = useState();
  const [playerWins, setPlayerWins] = useState([]);

  async function simulate() {
    let {data: gameData} = await axios.get("/api/war");
    setGameInfo(gameData);
    setPlayerOne(gameData.playerOne.name);
    setPlayerTwo(gameData.playerTwo.name);
    console.log(gameData);
  }

  async function fetchWins() {
    let {data: wins} = await axios.get("/api/players");
    setPlayerWins(wins);
    console.log(playerWins);
  }

  useEffect(() => {
    fetchWins();
  }, []);

  useEffect(() => {
    fetchWins();
  }, [gameInfo]);

  return (
    <div className='main'>
      <h1>War Simulator</h1>
      <Wins wins={playerWins} />
      <button type='button' onClick={simulate}>
        Simulate a game
      </button>
      {gameInfo && (
        <div>
          <div className='player-container'>
            <h2>
              {playerOne} vs {playerTwo}
            </h2>
            <h3>
              {gameInfo.winner} wins after {gameInfo.moves.length + 1} rounds!
            </h3>
          </div>
          <div>
            <GameInfo moves={gameInfo.moves} />
          </div>
        </div>
      )}
    </div>
  );
}
