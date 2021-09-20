const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => {
  const data = {
    name: "lucía",
    website: "onegolf.es",
  };
  res.json(data);
});

module.exports = router;
