const Player = require("./models/Player");
const db = require("./");

const seed = async () => {
  try {
    await db.sync({force: true});

    await Player.create({
      name: "Mike",
    });

    await Player.create({
      name: "Jo",
    });

    await Player.create({
      name: "Marge",
    });

    await Player.create({
      name: "Lisa",
    });

    await Player.create({
      name: "Bart",
    });

    await Player.create({
      name: "Homer",
    });

    console.log("Database successfully seeded!");
  } catch (error) {
    console.error(error);
  }
};

seed();
