const joi = require("joi");
const _ = require("lodash");

const validateCreatePokemon = (
  name,
  maxCP,
  stamina,
  attack,
  defense,
  family,
  weaknesses,
  resistances,
  description
) => {
  const schema = joi
    .object({
      name: joi
        .string()
        .regex(/\w+/)
        .min(3)
        .max(30)
        .rule({ message: "Provide valid name." })
        .required(),
      maxCP: joi
        .number()
        .positive()
        .rule({ message: "Provide valid Max CP value." })
        .required(),
      attack: joi
        .number()
        .positive()
        .rule({ message: "Provide valid attack value." })
        .required(),
      defense: joi
        .number()
        .positive()
        .rule({ message: "Provide valid defense value." })
        .required(),
      stamina: joi
        .number()
        .positive()
        .rule({ message: "Provide valid stamina value." })
        .required(),
      description: joi
        .string()
        .regex(/\w+/)
        .min(3)
        .max(255)
        .rule({ message: "Provide valid description." })
        .required(),
      family: joi
        .string()
        .regex(/\w+/)
        .min(3)
        .max(20)
        .rule({ message: "Provide valid family." })
        .required(),
      weaknesses: joi.array().items(joi.string()),
      resistances: joi.array().items(joi.string()),
    })
    .options({ abortEarly: false });

  const { error } = schema.validate({
    name,
    maxCP,
    attack,
    defense,
    stamina,
    description,
    family,
    // weaknesses,
    // resistances,
  });

  if (error && !_.isEmpty(error)) {
    const errors = {};
    error.details.forEach(({ path, message }) => (errors[path] = message));
    return errors;
  }

  return undefined;
};

module.exports = { validateCreatePokemon };
