const ProductQuerySchema = require("./schema");

// Objek ProductValidator akan digunakan untuk validasi query
const ProductValidator = {
  validateQuery: (query) => {
    const validationResult = ProductQuerySchema.validate(query);
    if (validationResult.error) {
      throw new Error(validationResult.error.message);
    }
    return validationResult;
  },
};

module.exports = ProductValidator;
