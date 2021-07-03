const cors = require("cors");
const express = require("express");
const Equipment = require("./equipmentData");
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());
app.options("*", cors());


app.get("/equipment", (req, res) => {
  res.set("Access-Control-Allow-Origin","*");
  res.set("Access-Control-Allow-Headers","*");
  res.set("Access-Control-Allow-Credentials","true");
  res.set("Access-Control-Max-Age","604800");
  rek,s.set("Content-type","application/json");
  res.set("Access-Control-Allow-Methods","GET");
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 10) + 1;

    if (randomNum > 7) {
      res.status(500).json({ error: "Ah jeez!" });
    } else {
      res.json(Equipment);
    }
  }, 800);
});

app.get("/searchEquipment", (req,res) => {

    var mnf = req.query.manufacturer.toUpperCase();
    var results = [];

    for (var index=0; index < Equipment.length; index++) {
        var checkEquipment = Equipment[index];
        if (checkEquipment.manufacturer && checkEquipment.manufacturer.toUpperCase() == mnf) {
            results.push(checkEquipment);
        }
    }
    res.json(results);

});

app.post("/ticket", (req,res) => {
    var ticket = req.body;
    if (!ticket.equipmentSerial) {
        res.status(500).send("Serial number is required");
    }

    //validate the serial number
    var serialExists = false;
    for (var index=0; index < Equipment.length && !serialExists; index++) {
        var checkEquipment = Equipment[index];
        if (checkEquipment.serial_number && checkEquipment.serial_number === ticket.equipmentSerial) {
            serialExists = true;
        }
    }
    if (!serialExists) {
        res.status(404).send("Serial number #" + ticket.equipmentSerial + " not found.");
    } else {
        console.log(ticket);
        let rawData = "[]";
        try {
          rawdata = fs.readFileSync('tickets.json');
        }
        catch (err) {
               //do nothing, this happens the first time the file is created.
        }
        let tickets = JSON.parse(rawdata);
        tickets.push(ticket);
        console.log(tickets.length);
        fs.writeFileSync('tickets.json', JSON.stringify(tickets));
        res.status(200);
        res.json(ticket);
    }
});
const port = 8100;

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
