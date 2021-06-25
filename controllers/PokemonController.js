const { Error } = require("../models");
const _ = require("lodash");

const {
  PokemonService: {
    getAllPokemon,
    getPokemonById,
    getPokemonByName,
    getPokemonByFamily,
    createPokemon,
    updatePokemon,
    deletePokemon,
  },
} = require("../services");
const { validateCreatePokemon } = require("../validators/pokemonValidations");

const getAllPokemonController = async (req, res) => {
  let pokemon = null;
  try {
    pokemon = await getAllPokemon();
    res.status(200).json({
      code: "OK",
      result: "SUCCESS",
      pokemon,
    });
  } catch (e) {
    return res
      .status(Error.INTERNAL_SERVER_ERROR_CODE)
      .send(new Error(Error.INTERNAL_SERVER_ERROR, e.message));
  }
};

const getPokemonByIdController = async (req, res) => {
  let pokemon = null;
  try {
    pokemon = await getPokemonById(req.params.id);
    if (!_.isEmpty(pokemon)) {
      res.status(200).json({
        code: "OK",
        result: "SUCCESS",
        pokemon,
      });
    } else {
      res
        .status(Error.BAD_REQUEST_CODE)
        .send(new Error(Error.BAD_REQUEST, "No Pokemon Found."));
    }
  } catch (e) {
    return res
      .status(Error.INTERNAL_SERVER_ERROR_CODE)
      .send(new Error(Error.INTERNAL_SERVER_ERROR, e.message));
  }
};

const getPokemonByNameController = async (req, res) => {
  let pokemon = null;
  try {
    pokemon = await getPokemonByName(req.params.name);
    if (!_.isEmpty(pokemon)) {
      res.status(200).json({
        code: "OK",
        result: "SUCCESS",
        pokemon,
      });
    } else {
      res
        .status(Error.BAD_REQUEST_CODE)
        .send(new Error(Error.BAD_REQUEST, "No Pokemon Found."));
    }
  } catch (e) {
    return res
      .status(Error.INTERNAL_SERVER_ERROR_CODE)
      .send(new Error(Error.INTERNAL_SERVER_ERROR, e.message));
  }
};

const getPokemonByFamilyController = async (req, res) => {
  let pokemon = null;
  try {
    pokemon = await getPokemonByFamily(req.params.family);
    if (!_.isEmpty(pokemon)) {
      res.status(200).json({
        code: "OK",
        result: "SUCCESS",
        pokemon,
      });
    } else {
      res
        .status(Error.BAD_REQUEST_CODE)
        .send(new Error(Error.BAD_REQUEST, "No Pokemon Found."));
    }
  } catch (e) {
    return res
      .status(Error.INTERNAL_SERVER_ERROR_CODE)
      .send(new Error(Error.INTERNAL_SERVER_ERROR, e.message));
  }
};

const createPokemonController = async (req, res) => {
  const {
    name,
    maxCP,
    family,
    stamina,
    attack,
    defense,
    description,
    weaknesses,
    resistances,
  } = req.body;

  try {
    const errors = validateCreatePokemon(
      name,
      maxCP,
      stamina,
      attack,
      defense,
      family,
      weaknesses,
      resistances,
      description
    );
    if (errors) {
      res
        .status(Error.BAD_REQUEST_CODE)
        .send(new Error(Error.BAD_REQUEST, errors));
    } else {
      const pokemon = await createPokemon(
        name,
        maxCP,
        attack,
        defense,
        stamina,
        description,
        family,
        weaknesses,
        resistances
      );
      res.status(200).json({
        code: "OK",
        result: "SUCCESS",
        message: "Pokemon Created",
      });
    }
  } catch (e) {
    res
      .status(Error.INTERNAL_SERVER_ERROR_CODE)
      .send(new Error(Error.INTERNAL_SERVER_ERROR, e.message));
  }
};

const updatePokemonController = async (req, res) => {
  let {
    name,
    maxCP,
    stamina,
    attack,
    defense,
    family,
    weaknesses,
    resistances,
    description,
  } = req.body;

  try {
    const pokemon = await getPokemonById(req.params.id);
    if (!_.isEmpty(pokemon)) {
      name = name?.trim?.();
      family = family?.trim?.();
      description = description?.trim?.();

      pokemon.name = name || pokemon.name;
      pokemon.maxCP = maxCP || pokemon.maxCP;
      pokemon.attack = attack || pokemon.attack;
      pokemon.defense = defense || pokemon.defense;
      pokemon.stamina = stamina || pokemon.stamina;
      pokemon.description = description || pokemon.description;
      pokemon.family = family || pokemon.family;
      pokemon.weaknesses = weaknesses || pokemon.weaknesses;
      pokemon.resistances = resistances || pokemon.resistances;

      await updatePokemon(pokemon);

      res.status(200).json({
        code: "OK",
        result: "SUCCESS",
        message: "Pokemon Updated.",
      });
    } else {
      res
        .status(Error.NOT_FOUND_CODE)
        .send(new Error(Error.NOT_FOUND, "No Pokemon Found."));
    }
  } catch (e) {
    res
      .status(Error.INTERNAL_SERVER_ERROR_CODE)
      .send(new Error(Error.INTERNAL_SERVER_ERROR, e.message));
  }
};

const deletePokemonController = async (req, res) => {
  let pokemon = null;

  try {
    pokemon = await getPokemonById(req.params.id);
    if (!_.isEmpty(pokemon)) {
      await deletePokemon(pokemon.id);

      res.status(200).json({
        code: "OK",
        result: "SUCCESS",
        message: "Pokemon Deleted.",
      });
    } else {
      res
        .status(Error.NOT_FOUND_CODE)
        .send(new Error(Error.NOT_FOUND, "Pokemon Not Found."));
    }
  } catch (e) {
    res
      .status(Error.INTERNAL_SERVER_ERROR_CODE)
      .send(new Error(Error.INTERNAL_SERVER_ERROR, e.message));
  }
};

module.exports = {
  getAllPokemonController,
  getPokemonByFamilyController,
  getPokemonByIdController,
  getPokemonByNameController,
  updatePokemonController,
  createPokemonController,
  deletePokemonController,
};
