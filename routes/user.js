const express = require("express");
const router = express.Router();
const gptRoutes = require("../controllers/user");

router.route("/gpt").post(gptRoutes.createGpt);

module.exports = router;
