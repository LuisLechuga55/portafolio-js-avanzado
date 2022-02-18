const express = require('express');
const res = require('express/lib/response');
const pokemonRouter = express.Router();
const PokemonesService = require("../../services/pokemones/pokemones.service");

const servicePokemonObject = new PokemonesService();

pokemonRouter.get("/", async (req, res) => {
	const data = await servicePokemonObject.getAll();
	res.json({data});
});

pokemonRouter.get("/:id", async (req, res) => {
	const id = req.params.id;
	const pokemon = await servicePokemonObject.findOne(id);
	res.json(pokemon);
});

pokemonRouter.post("/", async (req, res) => {
	const body = req.body;
	const createPokemon = await servicePokemonObject.postPokemon(body);
	res.json({ message: 'created', data: createPokemon });
});

pokemonRouter.patch("/:id", async (req, res) => {
	const body = req.body;
	const id = req.params.id;
	await servicePokemonObject.partialPokemon(id, body);
	res.json({
		message: "created",
		data: body,
	});
});

pokemonRouter.put("/:id", async (req, res) => {
	const body = req.body;
	const id = req.params.id;
	await servicePokemonObject.updateComplete(id, body);
	res.json({
		message: "updated all",
		id,
		data: body,
	});
});

pokemonRouter.delete("/:id", async (req, res) => {
	const id = req.params.id;
	const data = await servicePokemonObject.deletePokemon(id);
	res.json( { message: "deleted",	id, data });
});

module.exports = pokemonRouter;
