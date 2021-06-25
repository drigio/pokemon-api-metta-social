const router = require("express").Router();

const {
  pokemonController: {
    getAllPokemonController,
    getPokemonByFamilyController,
    getPokemonByIdController,
    getPokemonByNameController,
    updatePokemonController,
    createPokemonController,
    deletePokemonController,
  },
} = require("../controllers");

router.get("/all", getAllPokemonController);

router.get("/find/name/:name", getPokemonByNameController);

router.get("/find/family/:family", getPokemonByFamilyController);

router.get("/:id", getPokemonByIdController);

router.post("/", createPokemonController);

router.put("/:id", updatePokemonController);

router.delete("/:id", deletePokemonController);

module.exports = router;
