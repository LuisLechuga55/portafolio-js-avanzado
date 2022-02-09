const express = require('express');
const dummyRouter = express.Router();

dummyRouter.get("/", (req, res) => {
	res.send("hola mundo!");
});

module.exports = dummyRouter;
