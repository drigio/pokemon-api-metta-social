const { Pokemon } = require("../models");
const _ = require("lodash");

const loadSeedData = async (mongoConnection) => {
  const pokemons = [
    new Pokemon({
      name: "Raichu",
      description:
        "Pokémon GO Raichu is a Electric type Pokemon with a max CP of 2467, 193 attack, 151 defense and 155 stamina in Pokemon GO.",
      family: "Electric",
      stamina: 155,
      attack: 193,
      defense: 151,
      maxCP: 2467,
      weaknesses: ["Ground"],
      resistances: ["Electric", "Flying", "Steel"],
    }),
    new Pokemon({
      name: "Machamp",
      description:
        "Pokémon GO Machamp is a Fighting type Pokemon with a max CP of 3455, 234 attack, 159 defense and 207 stamina in Pokemon GO.",
      family: "Fighting",
      stamina: 207,
      attack: 234,
      defense: 159,
      maxCP: 3455,
      weaknesses: ["Fairy", "Flying", "Psychic"],
      resistances: ["Bug", "Dark", "Rock"],
    }),

    new Pokemon({
      name: "Charmander",
      description:
        "Pokémon GO Charmander is a Fire type Pokemon with a max CP of 1108, 116 attack, 93 defense and 118 stamina in Pokemon GO.",
      family: "Fire",
      stamina: 118,
      attack: 116,
      defense: 93,
      maxCP: 1108,
      weaknesses: ["Ground", "Rock", "Water"],
      resistances: ["Bug", "Fairy", "Fire"],
    }),

    new Pokemon({
      name: "Jigglypuff",
      description:
        "Pokémon GO Jigglypuff is a Normal and Fairy type Pokemon with a max CP of 818, 80 attack, 41 defense and 251 stamina in Pokemon GO.",
      family: "Fairy",
      stamina: 251,
      attack: 80,
      defense: 41,
      maxCP: 818,
      weaknesses: ["Poison", "Steel"],
      resistances: ["Dragon", "Ghost", "Bug"],
    }),

    new Pokemon({
      name: "Dratini",
      description:
        "Pokémon GO Dratini is a Dragon type Pokemon with a max CP of 1136, 119 attack, 91 defense and 121 stamina in Pokemon GO.",
      family: "Dragon",
      stamina: 121,
      attack: 119,
      defense: 91,
      maxCP: 1136,
      weaknesses: ["Dragon", "Fairy", "Ice"],
      resistances: ["Electric", "Fire", "Grass"],
    }),

    new Pokemon({
      name: "Bulbasaur",
      description:
        "Pokémon GO Bulbasaur is a Grass and Poison type Pokemon with a max CP of 1260, 118 attack, 111 defense and 128 stamina in Pokemon GO",
      family: "Grass",
      stamina: 128,
      attack: 118,
      defense: 111,
      maxCP: 1260,
      weaknesses: ["Fire", "Flying", "Water"],
      resistances: ["Electric", "Grass", "Fighting"],
    }),

    new Pokemon({
      name: "Hypno",
      description:
        "Pokémon GO Hypno is a Psychic type Pokemon with a max CP of 2363, 144 attack, 193 defense and 198 stamina in Pokemon GO.",
      family: "Electric",
      stamina: 198,
      attack: 144,
      defense: 193,
      maxCP: 2363,
      weaknesses: ["Bug", "Dark"],
      resistances: ["Fighting"],
    }),

    new Pokemon({
      name: "Heatran",
      description:
        "Pokémon GO Heatran is a legendary Fire and Steel type Pokemon with a max CP of 4244, 251 attack, 213 defense and 209 stamina in Pokemon GO.",
      family: "Electric",
      stamina: 209,
      attack: 251,
      defense: 213,
      maxCP: 4244,
      weaknesses: ["Figthing", "Water"],
      resistances: ["Ice", "Bug", "Steel"],
    }),

    new Pokemon({
      name: "Graveler",
      description:
        "Pokémon GO Graveler is a Rock and Ground type Pokemon with a max CP of 2145, 164 attack, 164 defense and 146 stamina in Pokemon GO.",
      family: "Rock",
      stamina: 209,
      attack: 251,
      defense: 213,
      maxCP: 4244,
      weaknesses: ["Figthing", "Grass"],
      resistances: ["Fire", "Rock", "Flying"],
    }),

    new Pokemon({
      name: "Blastoise",
      description:
        "Pokémon GO Blastoise is a Water type Pokemon with a max CP of 2788, 171 attack, 207 defense and 188 stamina in Pokemon GO.",
      family: "Water",
      stamina: 188,
      attack: 171,
      defense: 207,
      maxCP: 2788,
      weaknesses: ["Electric"],
      resistances: ["Fire", "Ice", "Steel"],
    }),

    new Pokemon({
      name: "Venomoth",
      description:
        "Pokémon GO Venomoth is a Bug and Poison type Pokemon with a max CP of 2354, 179 attack, 143 defense and 172 stamina in Pokemon GO.",
      family: "Bug",
      stamina: 172,
      attack: 179,
      defense: 143,
      maxCP: 2354,
      weaknesses: ["Fire", "Flying"],
      resistances: ["Poison", "Fairy", "Bug"],
    }),

    new Pokemon({
      name: "Golurk",
      description:
        "Pokémon GO Golurk is a Ground and Ghost type Pokemon with a max CP of 3226, 222 attack, 154 defense and 205 stamina in Pokemon GO.",
      family: "Ghost",
      stamina: 205,
      attack: 222,
      defense: 154,
      maxCP: 3226,
      weaknesses: ["Dark", "Ghost"],
      resistances: ["Electric", "Bug", "Steel"],
    }),
  ];

  const areTherePokemon = await Pokemon.find().limit(1);
  if (_.isEmpty(areTherePokemon)) {
    let count = 0;
    for (const pokemon of pokemons) {
      await pokemon.save();
      count++;
    }
    console.log(`Seeded ${count} number of pokemons into the db.`);
  } else console.log("Data already Present in DB. No Seeding applied.");
};

module.exports = loadSeedData;
