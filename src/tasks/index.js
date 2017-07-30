const { task } = require('folktale/concurrency/task');

// const delay = ms => task(
//   (resolver) => {
//     const timerId = setTimeout(() => resolver.resolve(ms), ms);
//     resolver.cleanup(() => {
//       clearTimeout(timerId);
//     });
//     resolver.onCancelled(() => {
//       /* does nothing */
//     });
//   }
// );

// // waits 100ms
// const result = await delay(100).or(delay(2000)).run().promise();
// $ASSERT(result == 100);


// const tokenOk = ({res, obj}) => new Promise((resolve, reject)=>
//     checkToken(obj)
//     .matchWith({
//         Success: _ => resolve({res, obj}),
//         Failure: err => reject(new Error(err.value)) 
//     })
// );

// const tokenOk = ({res, obj}) => task( resolver =>
//     checkToken(obj)
//     .matchWith({
//         Success: _ => resolver.resolve({res, obj}),
//         Failure: err => resolver.reject(new Error(err.value)) 
//     })
// );










const sendLoginResponse = () =>
{
    let connection;
    return oracle.getConnection(oracleDefaultConnection(), oracleDefaultConfig())
    .then( conn =>
    {
        connection = conn;
        return user.login(connection, req.body.EID);
    })
    .then( userObject =>
    {
        oracle.release(connection)
        .then(()=>
        {
            res.send(200, {result: true, data: userObject});
        });
    })
    .catch((err)=>
    {
        oracle.release(connection)
        .then(()=>
        {
            res.send(401, {result: false, error: err.toString()});
        });
    });
};

const sendLoginResponse = task( 
    resolver =>
    {
        let connection;
        resolver.cleanup(connection => oracle.release(connection));
        oracle.getConnection(oracleDefaultConnection(), oracleDefaultConfig())
        .then( conn =>
        {
            connection = conn;
            return user.login(connection, req.body.EID);
        })
        .then( userObject => resolver.resolve(res.send(200, {result: true, data: userObject}))
        .catch( err => resolver.reject(res.send(401, {result: false, error: err.toString()}))))
    }
);



