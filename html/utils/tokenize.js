
const compose = require('./compose');

const lowercase = require('./lowercase');
const collapse = require('./collapse-white-spaces');
const stripSymbols = require('./strip-symbols');


exports = module.exports =
    compose(lowercase, collapse, stripSymbols);
