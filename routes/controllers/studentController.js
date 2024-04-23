
var express = require('express')

var router = express.Router();
const { getStudentService, regStudentService, loginService, getStdByIdService, updateStudentService, deleteStudentService } = require('../services/studentServices')
const jwt = require('jsonwebtoken');
const validateToken = require('../../common/validateToken');

router.get('/get-std',
    // function (req, res, next) {
    //     const token = req.headers.authorization
    //     if (token) {
    //         jwt.verify(token, "myToken", function (e,s) {
    //             if (s) {
    //                 next()
    //             }
    //             else {
    //                 res.send("invalid token")
    //             }
    //         })
    //     }
    //     else {
    //         res.send("token missing")
    //     }
    // },

    validateToken,
    async function (req, res, next) {
        console.log("studentController")
        const result = await getStudentService(req);
        res.send(result)
    });

router.post('/reg-std', async function (req, res, next) {
    const result = await regStudentService(req);
    res.send(result)
});

router.post('/login', async function (req, res, next) {
    const response = await loginService(req);
    res.send(response)
})

router.get('/get-user-by-id', validateToken, async function (req, res, next) {
    const result = await getStdByIdService(req);
    res.send(result);
})

router.put('/update-std/:id', validateToken, async function (req, res, next) {
    const result = await updateStudentService(req);
    res.send(result)
})

router.delete('/delete-std', validateToken, async function (req, res, next) {
    const result = await deleteStudentService(req);
    res.send(result);
})

module.exports = router;