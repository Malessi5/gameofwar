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

- Create a local Postgres database

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

- Start the server

```
$ npm start
```

- Go to `localhost:3000`

## How To Play

Well, you can't really play. But you can simulate two other people playing just by clicking the button!

Each time a simulation is run, the leaderboard will update the winner's total wins.

## General Info

### Endpoints

There are two API endpoints:

- `GET /api/war/` will start a game between 2 random players from the database and return a completed game object.

- `GET /api/players` will return the lifetime wins for each player stored in the database.

### Testing

Tests can be ran with `npm test`
