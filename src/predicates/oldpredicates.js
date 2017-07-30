const _ = require('lodash');
const log = console.log;

const validator = (errorCode, method)=>
{
	const valid = (...args) => method.apply(method, args);
	valid.errorCode = errorCode;
	return valid;
}

const checker = (...validators)=>
{
	return (something)=>
	{
		return _.reduce(validators, (errors, validatorFunction)=>
		{
			if(validatorFunction(something))
			{
				return errors;
			}
			else
			{
				return _.chain(errors).push(validatorFunction.errorCode).value();
			}
		}, [])
	};
};

module.exports = {
	validator,
	checker
};