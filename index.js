const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/:name", (req, res) => {
  const { name } = req.params;
  res.status(200).send(`Name: ${name}`);
});

app.get("/", (req, res) => {
  res.send(`App is working fine`);
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
