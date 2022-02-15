const express = require('express');
const pokemonRouter = express.Router();
const PokemonesService = require("../../services/pokemones/pokemones.service");

const servicePokemonObject = new PokemonesService();

pokemonRouter.get("/", async (req, res) => {
	const data = await servicePokemonObject.getAll();
	res.json({data});
});

module.exports = pokemonRouter;
