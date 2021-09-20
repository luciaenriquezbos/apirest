const { Router } = require("express");
const router = Router();

const torneos = require("../torneos.json");

router.get("/", (req, res) => {
  res.json(torneos);
});

router.post("/", (req, res) => {
  const { tournament, club, province, ccaa, year, date } = req.body;
  if (tournament && club && province && ccaa && year && date) {
    const id = torneos.length + 1;
    const newTournament = { ...req.body, id };
    console.log(newTournament);
    res.json("saved");
  } else {
    res.send("Wrong Request");
  }
});

module.exports = router;
