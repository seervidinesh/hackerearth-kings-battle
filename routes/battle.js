const router = require("express").Router();
let { Battle } = require("../database");

router.get("/", (req, res) => {
  Battle.findAll({})
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
});

module.exports = router;
