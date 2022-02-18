const axios = require('axios');

class PokemonesService {

	constructor() {

	}

	async getAll() {

		const res = await axios('http://localhost:3000/pokemons')
		const data = res.data;
		return data;

	}

	async findOne(id) {

				const res = await axios(`http://localhost:3000/pokemons/${id}`);
				const data = res.data;
				return data;
	}

	async postPokemon(newPokemon) {
		try {

		let pokemon =	await	axios.post('http://localhost:3000/pokemons', newPokemon)
		return pokemon.data;

		} catch (error) {
			return error.response;
		}
		// console.log(newPokemon);


		// const res = await axios.post('http://localhost:3000/pokemons')
			// const data = res.body;
			// return data;

	}

	async editPokemon(id, patchPokemon) {

		const res = await axios.patch(`http://localhost:3000/pokemons/${id}`, patchPokemon);
		const data = res.data;
		return data;
	}

	async updatePokemon(id, pokemonUpdate) {

		const res = await axios.put(`http://localhost:3000/pokemons/${id}`, pokemonUpdate);
		const data = res.data;
		return data;
	}

	async deletePokemon(id) {

		const res = await axios.delete(`http://localhost:3000/pokemons/${id}`)
		const data = res.data;
		return data;
	}
}

module.exports = PokemonesService;
