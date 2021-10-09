// require('dotenv').config();
// //MONGOOSE ODM
// const mongoose = require('mongoose');
// // Fire off the connection to Mongo DB
// mongoose.connect(process.env.ATLAS_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });

// mongoose.connection.on('connected', () => {
//     console.log(`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`);
// });

// mongoose.connection.on("error", (err) => {
//     console.log("Could not connect to MongoDB!", err);
// });

//API ATLAS RESOURCE
// const { MongoClient } = require('mongodb');

// async function main(){
//     const uri = process.env.ATLAS_URI;
//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
//         await listDatabases(client);
        
//         // Create new userName
//         await createListing(client,
//         {
//             userName: "LovelyPoster",
//             message: "A charming post in Paris",
//         }
//     );

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     };
// };

// main().catch(console.error);
// // Listing the Databases 
// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
// // Creating a new userName
// async function createListing(client, newUserName){
//     const result = await client.db("USERS").collection("userNames").insertOne(newUserName);
//     console.log(`New userName created with the following id: ${result.insertedId}`);
// };