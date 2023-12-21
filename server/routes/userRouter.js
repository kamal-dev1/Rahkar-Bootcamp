const express = require('express');
const router = express.Router();


const { GetUsers, getUsersByFilter } = require("../controllers/userController");

router.get("/",GetUsers);
router.get("/:name",getUsersByFilter);

module.exports = router;
