const log = console.log;
const union = require('folktale/adt/union/union');
const Equality = require('folktale/adt/union/derivations/equality');

const Maybe = union('Maybe',
{
  Just(value){ return value },
  Nothing() { return {} }
});

// log(Maybe.Just('cow'))
// // { '0': 'c', '1': 'o', '2': 'w' }

// const maybeCow = Maybe.Nothing();
// const result = maybeCow.matchWith({
//     Just: ({value}) => value,
//     Nothing: _ => false
// });
// log("result:", result);
// // result: false


// const HTTPMethod = union('HTTPMethod', {
//     GET() { return {value: 'GET'} },
//     POST() { return {value: 'POST'} },
//     PUT() { return {value: 'PUT'} },
//     DELETE() { return {value: 'DELETE'} },
//     PATCH() { return {value: 'PATCH'} },
//     OPTIONS() { return {value: 'OPTIONS'} }
// });

// HTTPMethod.GET(); // { value: 'GET' }


// HTTPMethod.hasInstance(HTTPMethod.GET()); // true

// HTTPMethod.GET.hasInstance(HTTPMethod.GET()); // true

// HTTPMethod.POST.hasInstance(HTTPMethod.GET()); // false





// const HTTPMethod = union('HTTPMethod', {
//     GET() { return {value: 'GET'} },
//     POST() { return {value: 'POST'} },
//     PUT() { return {value: 'PUT'} },
//     DELETE() { return {value: 'DELETE'} },
//     PATCH() { return {value: 'PATCH'} },
//     OPTIONS() { return {value: 'OPTIONS'} }
// }).derive(Equality);

// log(HTTPMethod.GET().equals(HTTPMethod.GET())); // true

// const a = HTTPMethod.GET();
// const b = HTTPMethod.GET();
// log(a.equals(b)); // true



const Attack = union('Attack', {
    Hit(amount, critical=false) { return {amount, critical}},
    Miss() { return {value: 'Miss'}}
}).derive(Equality);
const { Hit, Miss } = Attack;

Hit(1, false).hasInstance(Hit(1, false)); // true
Hit(1, false).hasInstance(Hit(2, true)); // true
Hit(1, false).equals(Hit(1, false)); // true
Hit(1, false).equals(Hit(2, true)); // false





