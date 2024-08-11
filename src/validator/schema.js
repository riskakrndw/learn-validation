const Joi = require("joi");

const ProductQuerySchema = Joi.object({
  // untuk membuat validasi name yang bertipe data string dan boleh bernilai empty
  name: Joi.string().empty(""),
});

module.exports = ProductQuerySchema;
