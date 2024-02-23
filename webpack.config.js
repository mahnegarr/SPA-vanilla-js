const path = require("path");

module.exports = {
  entry: {
    main: "./test.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  }
};

