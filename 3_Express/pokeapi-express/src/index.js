const express = require("express");
const routerApi = require('./routes');
const app = express();
const port = 3001;

app.use(express.json());

app.listen(port, () => {
	console.log(`Server ok, puerto: ${port}`);
});

routerApi(app);
