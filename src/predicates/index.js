const log = console.log;
const _ = require('lodash');
const Validation = require('folktale/validation');
const { Success, Failure } = Validation;
const {validator, checker} = require('./predicates');



// const nonEmptyString = o => _.isString(o) && o.length > 0; 
// nonEmptyString('cow'); // true
// nonEmptyString(``); // false
// nonEmptyString(123); // false
// nonEmptyString(new Date()); // false



// const nonEmptyString = o => _.isString(o) && o.length > 0;

// const legitNumber = o => _.isNumber(o) && _.isNaN(o) === false;
// legitNumber(1); // true
// legitNumber(2.34); // true
// legitNumber(10/0); // true
// legitNumber(Number.Infinity / 0); // false

// const legitDate = o => _.isDate(o) && o.toString() !== 'Invalid Date';
// legitDate(new Date()); // true
// legitDate(Date.now()); // false
// legitDate(new Date('cow')); // false



// const legitAccessToken      = token        => legitString(_.get(token, 'access_token'));


// Maybe.Just()
// Maybe.Nothing()



// const nonEmptyString = o => _.isString(o) && o.length > 0; 
// const validString = o =>
//   nonEmptyString(o) ? Success(o)
//   : /* otherwise */ Failure(["Not a valid, must be a non-empty String."]);

// validString('cow');
// // folktale:Validation.Success({ value: "cow" })

// validString('');
// // folktale:Validation.Failure({ value: ["Not a valid, must be a non-empty String."] })

// validString(123);
// // folktale:Validation.Failure({ value: ["Not a valid, must be a non-empty String."] })




// const _ = require('lodash');
// const { validator } = require('./oldpredicates');

// const legitString           = token        => _.isString(token) && token.length > 0;
// const legitNumber           = number       => _.isNumber(number) && _.isNaN(number) === false; 
// const legitDate             = date         => _.isDate(date) && date.toString() !== 'Invalid Date';
// const legitAccessToken      = token        => legitString(_.get(token, 'access_token'));
// const legitIssuedAt         = token        => legitNumber(_.get(token, 'issued_at')) && legitDate(new Date(_.get(token, 'issued_at')));
// const legitExpiresIn        = token        => legitNumber(_.get(token, 'expires_in'));
// const legitClientID         = clientID     => _.isString(clientID) && clientID.length > 0;
// const legitClientSecret     = clientSecret => _.isString(clientSecret) && clientSecret.length > 0;
// const legitURL              = url          => _.isString(url) && url.length > 0 && url.indexOf('http') !== -1;

// const stringValidator       = validator('Not a string, or an empty string.', legitString);
// const accessTokenValidator  = validator('Access Token is invalid.', legitAccessToken);
// const expiresInValidator    = validator('Expires In is invalid.', legitExpiresIn);
// const issuedAtValidator     = validator('Issued at is not a valid number or not a valid date.', legitIssuedAt);
// const clientIDValidator     = validator('Invalid clientID, must be a string and length longer than 0.', legitClientID);
// const clientSecretValidator = validator('Invalid clientSecret, must be a string and length longer than 0.', legitClientSecret);
// const urlValidator          = validator('Invalid URL; must be a string, not empty, and contain http.', legitURL);


// const token = {
//   access_token: "alsdjflkjasdf12u3o4sdf",
//   issued_at: new Date().valueOf(),
//   expires_in: 2
// };

// Success()
// .concat(accessTokenValidator(token))
// .concat(expiresInValidator(token))
// .concat(issuedAtValidator(token));
// // folktale:Validation.Success({ ...


// const token = {
//   access_token: "alsdjflkjasdf12u3o4sdf",
//   issued_at: new Date(),
//   expires_in: '2'
// };
// Success()
// .concat(accessTokenValidator(token))
// .concat(expiresInValidator(token))
// .concat(issuedAtValidator(token));
// ...
// ["Expires In is invalid.", 
// "Issued at is not a valid number or not a valid date."
// ...


// const didItValidate = Success()
// .concat(accessTokenValidator(token))
// .concat(expiresInValidator(token))
// .concat(issuedAtValidator(token))
// .matchWith({
//   Success: _ => true,
//   Failure: _ => false
// });
// log(didItValidate); // false


// const checkToken            = checker(accessTokenValidator, expiresInValidator, issuedAtValidator);
// const checkClientID         = checker(stringValidator, clientIDValidator);
// const checkClientSecret     = checker(stringValidator, clientSecretValidator);
// const checkURL              = checker(stringValidator, urlValidator);







// const _ = require('lodash');
// const { validator, checker } = require('./oldpredicates');

// const legitString           = token        => _.isString(token) && token.length > 0;
// const legitNumber           = number       => _.isNumber(number) && _.isNaN(number) === false; 
// const legitDate             = date         => _.isDate(date) && date.toString() !== 'Invalid Date';
// const legitAccessToken      = token        => legitString(_.get(token, 'access_token'));
// const legitIssuedAt         = token        => legitNumber(_.get(token, 'issued_at')) && legitDate(new Date(_.get(token, 'issued_at')));
// const legitExpiresIn        = token        => legitNumber(_.get(token, 'expires_in'));
// const legitClientID         = clientID     => _.isString(clientID) && clientID.length > 0;
// const legitClientSecret     = clientSecret => _.isString(clientSecret) && clientSecret.length > 0;
// const legitURL              = url          => _.isString(url) && url.length > 0 && url.indexOf('http') !== -1;

// const stringValidator       = validator('Not a string, or an empty string.', legitString);
// const accessTokenValidator  = validator('Access Token is invalid.', legitAccessToken);
// const expiresInValidator    = validator('Expires In is invalid.', legitExpiresIn);
// const issuedAtValidator     = validator('Issued at is not a valid number or not a valid date.', legitIssuedAt);
// const clientIDValidator     = validator('Invalid clientID, must be a string and length longer than 0.', legitClientID);
// const clientSecretValidator = validator('Invalid clientSecret, must be a string and length longer than 0.', legitClientSecret);
// const urlValidator          = validator('Invalid URL; must be a string, not empty, and contain http.', legitURL);

// const checkToken            = checker(accessTokenValidator, expiresInValidator, issuedAtValidator);
// const checkClientID         = checker(stringValidator, clientIDValidator);
// const checkClientSecret     = checker(stringValidator, clientSecretValidator);
// const checkURL              = checker(stringValidator, urlValidator);

// const fixtureToken = () => (
//     {
//         "issued_at": new Date().getTime() / 1000,
//         "token_type": "Bearer",
//         "expires_in": 1296000,
//         "access_token": "eyJlbmMiOiJBM"
//     }
// );

// log(checkToken(fixtureToken()));


// const Validation = require('folktale/validation');
// const { Success, Failure } = Validation;
// const _ = require('lodash');

// const legitString = token => _.isString(token) && token.length > 0;

// const validString = o =>
//   legitString(o) ? Success(o)
//   : /* otherwise */ Failure(['Not a string, or an empty string.']);

// log(validString('cow'));
// log(validString(''));
// log(validString(1));


// const result = validString('cow')
// .matchWith({
//     Success: ({value}) => 'DAT SUPA COW!',
//     Failure: ({value}) => -1
// });
// log("result:", result);


// log(validString('cow').map(_ => 'chicken'));
// log(validString('').mapFailure(_ => 'dat boom'));






// const {validator, checker} = require('../predicates');
// const _ = require('lodash');

// const legitString           = token        => _.isString(token) && token.length > 0;
// const legitNumber           = number       => _.isNumber(number) && _.isNaN(number) === false; 
// const legitDate             = date         => _.isDate(date) && date.toString() !== 'Invalid Date';
// const legitAccessToken      = token        => legitString(_.get(token, 'access_token'));
// const legitIssuedAt         = token        => legitNumber(_.get(token, 'issued_at')) && legitDate(new Date(_.get(token, 'issued_at')));
// const legitExpiresIn        = token        => legitNumber(_.get(token, 'expires_in'));
// const legitClientID         = clientID     => _.isString(clientID) && clientID.length > 0;
// const legitClientSecret     = clientSecret => _.isString(clientSecret) && clientSecret.length > 0;
// const legitURL              = url          => _.isString(url) && url.length > 0 && url.indexOf('http') !== -1;

// const stringValidator       = validator('Not a string, or an empty string.', legitString);
// const accessTokenValidator  = validator('Access Token is invalid.', legitAccessToken);
// const expiresInValidator    = validator('Expires In is invalid.', legitExpiresIn);
// const issuedAtValidator     = validator('Issued at is not a valid number or not a valid date.', legitIssuedAt);
// const clientIDValidator     = validator('Invalid clientID, must be a string and length longer than 0.', legitClientID);
// const clientSecretValidator = validator('Invalid clientSecret, must be a string and length longer than 0.', legitClientSecret);
// const urlValidator          = validator('Invalid URL; must be a string, not empty, and contain http.', legitURL);

// const checkToken            = checker(accessTokenValidator, expiresInValidator, issuedAtValidator);
// const checkClientID         = checker(stringValidator, clientIDValidator);
// const checkClientSecret     = checker(stringValidator, clientSecretValidator);
// const checkURL              = checker(stringValidator, urlValidator);
