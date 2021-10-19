class Card {
  constructor(suit, num, value) {
    this.suit = suit;
    this.num = num;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }

  newDeck() {
    const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    const allSuits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    for (let suit of allSuits) {
      for (let num of allNums) {
        let val = num;
        if (typeof num === "string") {
          if (num === "A") {
            val = 11;
          } else {
            val = 10;
          }
        }
        this.add(new Card(suit, num, val));
      }
    }
  }

  add(card) {
    this.cards.push(card);
  }

  drawCard() {
    return this.cards.shift();
  }

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
}

class Game {
  constructor() {
    this.players = [];
    this.playerOneDeck = [];
    this.playerTwoDeck = [];
    this.deck = null;
  }

  newGame() {
    this.deck = new Deck();
    this.deck.newDeck();
    this.deck.shuffle();
    console.log(this.deck);
    this.dealCards(this.deck.cards);

    console.log(this.playerOneDeck, this.playerTwoDeck);
  }

  addPlayer(name) {
    this.players.push(new Player(name));
  }

  dealCards(fullDeck) {
    if (fullDeck.length) {
      let p1deal = true;
      while (fullDeck.length) {
        if (p1deal) {
          this.playerOneDeck.push(fullDeck.shift());
          p1deal = !p1deal;
        } else {
          this.playerTwoDeck.push(fullDeck.shift());
          p1deal = !p1deal;
        }
      }
    }
  }
}

let game = new Game();
game.newGame();
