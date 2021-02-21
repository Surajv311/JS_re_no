const express = require("express");

const router = express.Router();
// we can split out routes elegantly
// using the express.Router()
router.get("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

module.exports = router;
