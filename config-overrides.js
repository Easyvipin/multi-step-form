const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@Components": "src/Components",
    "@themes": "src/themes",
    "@app": "src/",
    "@Images": "src/Images",
  })(config);

  return config;
};
