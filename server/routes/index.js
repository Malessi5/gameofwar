const router = require("express").Router();
const {playGame} = require("../../war");
const Player = require("../db/models/Player");

//Main War route
router.get("/war", async (req, res, next) => {
  try {
    //Generate random players using random ids
    const randomP1 = Math.floor(Math.random() * 6) + 1;
    let randomP2 = Math.floor(Math.random() * 6) + 1;

    while (randomP1 === randomP2) {
      randomP2 = Math.floor(Math.random() * 6) + 1;
    }

    const playerOne = await Player.findByPk(randomP1);
    const playerTwo = await Player.findByPk(randomP2);

    const game = playGame(playerOne, playerTwo);

    //When game is completed, the win will be added to the respective player
    if (game.winner === playerOne.name) {
      await playerOne.addWin();
      await playerTwo.addLoss();
    } else {
      await playerTwo.addWin();
      await playerOne.addLoss();
    }
    res.send(game);
  } catch (error) {
    next(error);
  }
});

router.get("/players", async (req, res, next) => {
  try {
    const allPlayers = await Player.findAll({
      attributes: ["name", "totalWins", "totalGames"],
    });
    res.send(allPlayers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
