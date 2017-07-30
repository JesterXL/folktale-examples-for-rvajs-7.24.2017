const log = console.log;
const Validation = require('folktale/validation');
const { Success, Failure } = Validation;
const _ = require('lodash');
const { collect } = require('folktale/validation');

const validator = (errorString, predicate) => o =>
  predicate(o) ? Success(o)
  : /* otherwise */ Failure([errorString]);

const checker = (...validators) => o =>
  _.reduce(validators, (acc, validator) => 
  {
    return acc.concat(validator(o));
  }, Success(o));

module.exports = {
  validator,
  checker
};
