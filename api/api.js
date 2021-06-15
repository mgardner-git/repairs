const express = require("express");
const app = express();

const Equipment = require("./equipmentData");

const port = 8100;

app.get("/equipment", (req, res) => {
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 10) + 1;

    if (randomNum > 7) {
      res.status(500).json({ error: "Ah jeez!" });
    } else {
      res.json(Equipment);
    }
  }, 800);
});

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
