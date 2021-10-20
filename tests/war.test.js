const {Player} = require("../war");
const {Game} = require("../war");
const {Deck} = require("../war");
const {Card} = require("../war");
const {playGame} = require("../war");

//create a new test deck
const testDeck = new Deck();
testDeck.newDeck();

test("Properly creates a new full deck with 52 cards", () => {
  expect(testDeck.cards.length).toEqual(52);
});

test("New decks do not have any duplicate cards", () => {
  let cardNameArr = testDeck.cards.map((card) => {
    return card.cardName;
  });

  const testForDupes = (cardArr) => {
    let map = {};

    for (let i = 0; i < cardArr.length; i++) {
      if (map[cardArr[i]]) {
        return true;
      } else {
        map[cardArr[i]] = true;
      }
    }
    return false;
  };

  expect(testForDupes(cardNameArr)).toEqual(false);
});

test("After dealing, both players have 26 cards", () => {
  const player1 = new Player();
  const player2 = new Player();
  const testGame = new Game();

  testGame.newGame(player1, player2);

  expect(player1.cards.length).toEqual(26);
  expect(player2.cards.length).toEqual(26);
});

test("When a game is completed, the losing player has no cards left", () => {
  const player1 = new Player("bob");
  const player2 = new Player("bill");
  const testGame = playGame(player1, player2);

  const loserDeck =
    testGame.winner === testGame.playerOne.name
      ? testGame.playerTwo.cards
      : testGame.playerOne.cards;

  expect(loserDeck.length).toEqual(0);
});

test("When a game is completed, the winner's deck has all cards", () => {
  const player1 = new Player("timmy");
  const player2 = new Player("tommy");
  const testGame = playGame(player1, player2);

  const winnerDeck =
    testGame.winner === testGame.playerOne.name
      ? testGame.playerOne.cards
      : testGame.playerTwo.cards;

  expect(winnerDeck.length).toEqual(52);
});
