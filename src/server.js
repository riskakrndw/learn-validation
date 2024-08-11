require("dotenv").config();
const Hapi = require("@hapi/hapi");
const products = require("./api");
const ProductValidator = require("./validator/index");

const init = async () => {
  const server = Hapi.Server({
    host: "localhost",
    port: 3000,
    debug: {
      request: ["error"],
    },
  });

  await server.register({
    plugin: products,
    // menambahkan validator
    options: {
      validator: ProductValidator,
    },
  });

  await server.start();
  console.log("Server running on ", server.info.uri);
};

init();
