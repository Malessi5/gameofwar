const router = require("express").Router();
const playGame = require("../../war");

router.get("/war", (req, res, next) => {
  try {
    const winner = playGame();
    res.send(winner);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
