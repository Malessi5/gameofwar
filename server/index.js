const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

// module.exports = app;
