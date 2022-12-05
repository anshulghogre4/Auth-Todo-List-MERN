const express = require('express');
const { registration, login, dashboard, getUser } = require('../Controllers/userControllers');
const auth = require("../middleware/auth")
const cookieParser = require('cookie-parser');
const router = express.Router();




router.post("/api/u/register", registration);
router.post("/api/u/login", login);
router.get("/api/u/user", auth, getUser);

module.exports = router;