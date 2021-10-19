class Card {
  constructor(suit, num, value) {
    this.suit = suit;
    this.num = num;
    this.value = value;
  }

  show() {
    return `${this.num} of ${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }

  newDeck() {
    const allNums = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    // const allNums = ["2", "3", "4", "5", "6", "7"];
    const allValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const allSuits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    for (let suit of allSuits) {
      for (let i = 0; i < allNums.length; i++) {
        this.add(new Card(suit, allNums[i], allValues[i]));
      }
    }
  }

  add(card) {
    this.cards.push(card);
  }

  // drawCard() {
  //   return this.cards.pop();
  // }

  shuffle() {
    let currentIndex = this.cards.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[currentIndex],
      ];
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  drawCard() {
    return this.cards.pop();
  }

  addCards(cards) {
    for (let card of cards) {
      this.cards.unshift(card);
    }
  }
}

class Game {
  constructor() {
    this.playerOne = null;
    this.playerTwo = null;
    this.moves = [];
    this.deck = null;
    this.winner = null;
    this.round = 0;
  }

  newGame(playerOne, playerTwo) {
    //Add players to the game
    this.addPlayers(playerOne, playerTwo);

    //Create a new deck, it's card, and then shuffle them
    this.deck = new Deck();
    this.deck.newDeck();
    this.deck.shuffle();

    //Deal cards to each player
    this.dealCards(this.deck.cards);

    console.log(this.playerOne, this.playerTwo);
  }

  addPlayers(p1, p2) {
    this.playerOne = p1;
    this.playerTwo = p2;
  }

  dealCards(fullDeck) {
    if (fullDeck.length) {
      let p1deal = true;
      while (fullDeck.length) {
        if (p1deal) {
          this.playerOne.cards.push(fullDeck.shift());
          p1deal = !p1deal;
        } else {
          this.playerTwo.cards.push(fullDeck.shift());
          p1deal = !p1deal;
        }
      }
    }
  }

  startGame() {
    console.log(
      `Game started! ${this.playerOne.name} vs ${this.playerTwo.name}`
    );
    while (!this.winner) {
      this.round++;
      this.playARound();
      this.checkWinner();
      // console.log("in game", this.playerOne);
      // console.log("ingame", this.playerTwo);
    }
    console.log(this.winner.name, "wins!");
    // console.log(this.playerOne);
    // console.log(this.playerTwo);
  }

  playARound(warCards = []) {
    const cardOne = this.playerOne.drawCard();
    const cardTwo = this.playerTwo.drawCard();
    if (cardOne && cardTwo) {
      // warCards.push(cardOne);
      // warCards.push(cardTwo);
      console.log("Round", this.round, cardOne.show(), "vs", cardTwo.show());

      if (cardOne.value > cardTwo.value) {
        this.playerOne.addCards([...warCards, cardOne, cardTwo]);
      } else if (cardOne.value < cardTwo.value) {
        this.playerTwo.addCards([...warCards, cardTwo, cardOne]);
      } else {
        console.log("War!");
        warCards.push(cardOne);
        warCards.push(cardTwo);
        warCards.push(this.playerOne.drawCard());
        warCards.push(this.playerTwo.drawCard());
        this.playARound(warCards);
      }
    }
  }

  checkWinner() {
    // console.log(this.playerOne.cards, this.playerTwo.cards);
    if (this.playerTwo.cards.length === 0) {
      this.winner = this.playerOne;
    } else if (this.playerOne.cards.length === 0) {
      this.winner = this.playerTwo;
    }
  }
}

let playerOne = new Player("Mike");
let playerTwo = new Player("Jo");
let game = new Game();
game.newGame(playerOne, playerTwo);
game.startGame();
