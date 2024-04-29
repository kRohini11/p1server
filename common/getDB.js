
var mongodb = require('mongodb')


async function getDB() {
    try {
        const mongoClient = mongodb.MongoClient;
        const url = process.env.DB_URL;
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