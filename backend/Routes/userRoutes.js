const express = require('express');
const { registration, login, dashboard } = require('../Controllers/userControllers');
const auth = require("../middleware/auth")
const cookieParser = require('cookie-parser');
const router = express.Router();




router.post("/api/u/register", registration);
router.post("/api/u/login", login)


module.exports = router;