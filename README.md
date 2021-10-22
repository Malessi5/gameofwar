# Game of War

This project is based on the classic card game War and simulates a full game between two players.

## Technologies

This project was created with:

- PostgreSQL
- Express.js
- React.js
- Node.js

This project was also deployed on Heroku and can be viewed here:
https://simulate-game-of-war.herokuapp.com/

## Setup

After cloning the repository and `cd war` take the following steps:

- Create a local Postgres database called war

```
$ createdb war
```

- Install dependencies

```
$ npm install
```

- Seed the database

```
$ npm run seed
```

- Start the server and build bundle.js

```
$ npm start-dev
```

- Go to `localhost:3000`

## How To Play

Well, you can't really play. But you can simulate two other people playing just by clicking the button!

Each time a simulation is run, the leaderboard will update the winner's total wins.

## General Info

### Endpoints

There are two API endpoints:

- `GET /api/war/` will start a game between 2 random players from the database and return a completed game object.

```
The game object will contain:
- Both player objects which will include name and remaining cards.
- moves: an array of every turn which include each card played and the round number.
- winner: name of winner.
- loser: name of loser
- round: number of total rounds played.
```

- `GET /api/players` will return the lifetime wins for each player stored in the database.

### Testing

Tests can be ran with `npm test`

### Where to go from here?

- Ability to add or delete players in the database
- Implement card pagination within UI
- More stylized UI
- Simulate games with more than 2 players
