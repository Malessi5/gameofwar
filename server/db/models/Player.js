const Sequelize = require("sequelize");
const db = require("../");

const Player = db.define("player", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  totalGames: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  totalWins: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

Player.prototype.addWin = async function () {
  this.update({totalGames: this.totalGames + 1, totalWins: this.totalWins + 1});
};

Player.prototype.addLoss = async function () {
  this.update({totalGames: this.totalGames + 1});
};
// Player.prototype.getWins = async function () {
//   return this.totalWins;
// };

// Player.getAllWins = async function(){
//   return
// }

module.exports = Player;
