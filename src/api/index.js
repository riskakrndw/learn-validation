const ProductsHandler = require("./handler");
const routes = require("./routes");

// menambahkan validator
module.exports = {
  name: "products",
  version: "1.0.0",
  register: async (server, { validator }) => {
    const handler = new ProductsHandler(validator);
    server.route(routes(handler));
  },
};

// old
// module.exports = {
//   name: 'products',
//   version: '1.0.0',
//   register: async (server) => {
//     const handler = new ProductsHandler();
//     server.route(routes(handler));
//   },
// };
