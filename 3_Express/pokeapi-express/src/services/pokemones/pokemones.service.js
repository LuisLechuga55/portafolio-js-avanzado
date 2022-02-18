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

	async partialPokemon(id) {

		const res = await axios.patch(`http://localhost:3000/pokemons/${id}`);
		const data = res.data.headers;
	}

	async updatePokemon() {

		const res = await axios.put()
	}

	async deletePokemon(id) {

		const res = await axios.delete(`http://localhost:3000/pokemons/${id}`)
		const data = res.id;
		return data;
	}
}

module.exports = PokemonesService;
