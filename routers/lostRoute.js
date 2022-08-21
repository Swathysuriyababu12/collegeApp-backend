const express = require("express");
const router = express.Router();
const { LostDetails, GetDetails } = require("../controllers/lostFound");

router.post("/lost", LostDetails);
router.get("/found", GetDetails);

module.exports = router;
