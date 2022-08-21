const express = require("express");
const router = express.Router();
const { PostComplaint, GetComplaint } = require("../controllers/complaint");

router.post("/post", PostComplaint);
router.get("/get", GetComplaint);

module.exports = router;
