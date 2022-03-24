const uuid = require('uuid');

// mock the v4 function of uuid lib to make sure it returns the fixed id for testing
const v4 = () => '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d';

module.exports.parse = uuid.parse;
module.exports.v4 = v4;
module.exports.stringify = uuid.stringify;
