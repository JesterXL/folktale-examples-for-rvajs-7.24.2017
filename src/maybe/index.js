const log = console.log;
const Maybe = require('folktale/maybe');
const _= require('lodash');

// const getUserAtIndex = index => users[index];

// const users = [
//     {name: "Jesse", age: 38},
//     {name: "Albus", age: 2},
//     undefined,
//     {name: "Cow"}
// ];

// const getUserAtIndex = index => 
//     users[index] ? Maybe.Just(users[index])
//     : /* otherwise */ Maybe.Nothing();

// getUserAtIndex(1); 
// // folktale:Maybe.Just({ value: { name: "Albus", age: 2 } })
// getUserAtIndex(2); 
// // folktale:Maybe.Nothing({  })


// getUserAtIndex(1); // { name: 'Albus', age: 2 }
// getUserAtIndex(2); // undefined






// const users = [
//     {name: "Jesse", age: 38},
//     {name: "Albus", age: 2},
//     undefined,
//     {name: "Cow"}
// ];

// const getUserAtIndex = index => 
//     users[index] ? Maybe.Just(users[index])
//     : /* otherwise */ Maybe.Nothing();

// log(getUserAtIndex(1).getOrElse('No value found at index.')); 
// // { name: 'Albus', age: 2 }
// log(getUserAtIndex(2).getOrElse('No value found at index.'));
// // No value found at index.



const users = {
    "Jesse": {age: 38, skillz: ['powerlifting', 'parkour']},
    "Albus": {age: 2, skillz: ['being cute', 'being fluffy']},
    "Cow": {age: 1000, skillz: ['looking cool']}
};

_.get(users, 'Albus', 'Unknown property Albus.');
// { age: 2, skillz: [ 'being cute', 'being fluffy' ] }
_.get(users, 'Brandy', 'Unknown property Brandy.');
// Unknown property Brandy.



// users.Brandy;
// // undefined
// users.Brandy.age;
// // TypeError: Cannot read property 'age' of undefined
// _.get(users, 'Brandy.age', 'Unknown property Brandy.age.');
// // Unknown property Brandy.age.




// getUserAtIndex(1); // { name: 'Albus', age: 2 }
// getUserAtIndex(2); // undefined







// Maybe.Just('I matter');
// Maybe.Nothing();






// module.exports = getUserAtIndex;


// const _= require('lodash');

// const users = [
//     {name: "Jesse", age: 38, id: 1},
//     {name: "Albus", age: 2, id: 2},
//     {name: "Cow", age: 1000, id: 4}
// ];

// const findUserByName = name => _.find(users, 
//     user => user && user.name === name);

// findUserByName('Jesse'); // { name: 'Jesse', age: 38, id: 1 }
// findUserByName('Bruce'); // undefined


// const users = [
//     {name: "Jesse", age: 38, id: 1},
//     {name: "Albus", age: 2, id: 2},
//     {name: "Cow", age: 1000, id: 4}
// ];

// const findUserByName = name =>
// {
//     const result = _.find(users, 
//         user => user && user.name === name);
//     if(_.isNil(result))
//     {
//         return Maybe.Nothing();
//     }
//     else
//     {
//         return Maybe.Just(result);
//     }
// };

// findUserByName('Jesse');
// // folktale:Maybe.Just({ value: { name: "Jesse", age: 38, id: 1 } })
// findUserByName('Bruce');
// // folktale:Maybe.Nothing({  })





// Maybe.Just('dat string tho').matchWith({
//     Just: ({value}) => log("value:", value),
//     Nothing: ({value}) => log("error:", value)
// });
// // value: dat string tho

// Maybe.Nothing().matchWith({
//     Just: ({value}) => log("value:", value),
//     Nothing: _ => log("Nothing, brah.")
// });
// // Nothing, brah.


// const result = Maybe.Just('chicken').matchWith({
//     Just: ({value}) => true,
//     Nothing: _ => false
// });
// log("result:", result);
// // result: true



// const Maybe = require('folktale/maybe');

// const users = [
//     {name: "Jesse", age: 38},
//     {name: "Albus", age: 2},
//     undefined,
//     {name: "Cow"}
// ];

// const getUserAtIndex = index => 
//     users[index] ? Maybe.Just(users[index])
//     : /* otherwise */ Maybe.Nothing();


// const showMatch = index => 
//     getUserAtIndex(index)
//     .matchWith({
//         Just: person => console.log("person found:", person),
//         Nothing: _ => console.log("No person found.")
//     });

// showMatch(1);

// log(getUserAtIndex(1).getOrElse('No user found.'));
// log(getUserAtIndex(2).getOrElse('No user found.'));

// log(getUserAtIndex(1).map(user => user.name));
// log(getUserAtIndex(2).map(user => user.name));

// log(getUserAtIndex(1)
// .map(user => user.name)
// .orElse( _ => Maybe.Just('No user found.')));






// const fs = require('fs');

// const readConfig = () => fs.readFileSync('config.json');

// readConfig();
// // <Buffer 7b 22 70 61 74 ...



const fs = require('fs');

const readConfig = () => {
    try
    {
        const result = JSON.parse(fs.readFileSync('config.json').toString('utf8'));
        return Maybe.Just(result);
    }
    catch(err)
    {
        return Maybe.Nothing();
    }
};

log(readConfig().getOrElse({path: 'default/path'}));
// { path: 'chicken/moo/cow' }
// { path: 'default/path' }




// const fs = require('fs');
// const Maybe = require('folktale/maybe');

// const readConfig = () => {
//     try
//     {
//        return Maybe.Just(JSON.parse(fs.readFileSync('config.json').toString('utf8')));
//     }
//     catch(err)
//     {
//         return Maybe.Nothing();
//     }
// };

// log(readConfig().getOrElse({path: 'default/path/d00d'}));







