const { Pokemon } = require("../models");

class PokemonService {
    constructor() { }
    
    // Read
    async getAllPokemon() {
        return await Pokemon.find();
    }

    async getPokemonById(id) {
        return await Pokemon.findById(id);
    }

    async getPokemonByFamily(family) {
        return await Pokemon.find({ family: family });
    }

    async getPokemonByName(name) {
        return await Pokemon.find({ name: name });
    }


    // Create
    async createPokemon(name,maxCP, attack, defense, stamina, description, family, weaknesses, resistances) {
        return await Pokemon.create({
            name: name,
            maxCP: maxCP,
            attack: attack,
            defense: defense,
            stamina: stamina,
            description: description,
            family: family,
            weaknesses: weaknesses,
            resistances: resistances
        });
    }

    // Update
    async updatePokemon(updatedPokemon) {
        const pokemon = await Pokemon.findById(updatedPokemon.id);
        if (pokemon) {
            pokemon.name = updatedPokemon.name || pokemon.name,
            pokemon.maxCP = updatedPokemon.maxCP || pokemon.maxCP;
            pokemon.attack = updatedPokemon.attack || pokemon.attack;
            pokemon.defense = updatedPokemon.defense || pokemon.defense;
            pokemon.stamina = updatedPokemon.stamina || pokemon.stamina;
            pokemon.description = updatedPokemon.description || pokemon.description;
            pokemon.family = updatedPokemon.family || pokemon.family;
            pokemon.weaknesses = updatedPokemon.weaknesses || pokemon.weaknesses;
            pokemon.resistances = updatedPokemon.resistances || pokemon.resistances;

            return await pokemon.save();
        }
        return null;
    }

    // Delete
    async deletePokemon(id) {
        return await Pokemon.findByIdAndDelete(id);
    }
}

module.exports = new PokemonService();