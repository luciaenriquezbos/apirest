const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const torneos = require("../torneos.json");

router.get("/", (req, res) => {
  res.json(torneos);
});

router.post("/", (req, res) => {
  const { tournament, club, province, ccaa, year, date } = req.body;
  if (tournament && club && province && ccaa && year && date) {
    const id = torneos.length + 1;
    const newTournament = { ...req.body, id };
    torneos.push(newTournament);
    res.json(torneos);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

router.delete("/:id", (req, res) => {
  _each(torneos, (torneo, i) => {
    if (torneo.id == id) {
      torneo.splice(i, 1);
    }
  });
  res.send(torneos);
});

module.exports = router;
