
var mongodb = require('mongodb')


async function getDB() {
    try {
        const mongoClient = mongodb.MongoClient;
        const url = "mongodb+srv://u1:p1@project1.m7xyhbx.mongodb.net/";
        const server = await mongoClient.connect(url);
        const db = server.db("school");
        return db;
    }
    catch (e) {
        console.error(e);
    }
    finally {

    }
}


module.exports = getDB;