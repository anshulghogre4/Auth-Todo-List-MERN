const express = require('express')

const router = express.Router()
const { home } = require("../Controllers/todoControllers");



//home route
router.get("/", home);

 module.exports = router;