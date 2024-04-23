

var mongodb = require("mongodb")
var getDB = require('../../common/getDB')
var ObjectId = mongodb.ObjectId


async function getStudentDAO() {

    try {
        console.log("getStudentDAO");
        //connect with db
        const db = await getDB()
        const collection = db.collection("students")
        // perform operation 
        const result = await collection.find({}).toArray();
        //send the response
        return result
    }
    catch (e) {
        console.error(e)
    }
    finally {

    }
}

async function regStudentDAO(data) {
    console.log("regStudentDAO");
    try {
        //connect with db
        const db = await getDB();
        const collection = db.collection("students");
        // perform operation 
        const result = await collection.insertOne(data);

        //send the response

        return result
    }
    catch (e) {
        console.error(e)
    }
    finally {

    }
}

async function loginDAO(data) {
    try {
        const db = await getDB();
        const collection = db.collection("students");
        return await collection.find(data).toArray();

    }
    catch (e) {
        console.error(e)
    }
    finally {

    }
}

async function getStdByIdDAO(id) {
    console.log(id)
    try {
        const db = await getDB();
        const collection = db.collection("students")
        const result = await collection.find({ _id: ObjectId.createFromHexString(id) }).toArray()
        return result;
    }
    catch (e) {
        console.error(e);
    }
    finally {
    }
}

async function updateStudentDAO(id, data) {
    try {
        const db = await getDB();
        const collection = db.collection("students")
        const res = await collection.updateOne({ _id: ObjectId.createFromHexString(id)}, { $set: data })
        return res;
    } catch (e) {
        console.error(e)
    }

}

async function deleteStudentDAO(id) {
    try {
        const db = await getDB();
        const collection = db.collection("students");
        const res = collection.deleteOne({ _id: ObjectId.createFromHexString(id) })
        return res;
    }
    catch (e) {
        console.error(e)
    }

}

module.exports = { getStudentDAO, regStudentDAO, loginDAO, getStdByIdDAO, updateStudentDAO, deleteStudentDAO }