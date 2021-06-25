const { Schema, model } = require("mongoose");

const PokemonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    maxCP: {
        type: Number
    },
    attack: {
        type: Number
    },
    defense: {
        type: Number
    },
    stamina: {
        type: Number
    },
    description: {
        type: String
    },
    family: {
        type: String,
        required: true
    },
    weaknesses: {
        type: [String]
    },
    resistances: {
        type: [String]
    }
});

module.exports = model("Pokemon", PokemonSchema);