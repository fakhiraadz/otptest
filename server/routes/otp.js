const express = require('express');
const router = express.Router();

const conf = require("../config/conf")
const db = require('../config/db');
const client = require("twilio")(conf.accountSID, conf.authToken)

router.post('/sendotp', (req, res) => {

    const phonenum = req.body.phonenum

    client
        .verify
        .services(conf.serviceID)
        .verifications
        .create({
            to: `+6${phonenum}`,
            channel: 'sms'
        })
        .then((data) => {
            res.json({phonenum: phonenum})
        })
})

router.post('/verify', (req, res) => {
    client
        .verify
        .services(conf.serviceID)
        .verificationChecks
        .create({
            to: `+6${req.body.phonenum}`,
            code: req.body.otpcode
        })
        .then((data) => {
            //res.status(200).send(data)

            if (data.status == "pending"){
                res.json({status: "failed", message: "OTP Code incorrect!"})
            } else {
                res.json({status: "success", message: "OTP Code correct!"})
            }

            
            console.log(data.status)
        })
})

router.post('/register', (req, res) => {

    const phonenum = req.body.phonenum;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM user WHERE phonenum = ?",
    phonenum,
    (err, result) => {

        if (err) {
            console.log(err);
        }

        if (result.length > 0) {
            res.json({exist: true, message: "User already registered"});
        } else {
            db.query("INSERT INTO user (username, email, password, phonenum) VALUES (?, ?, ?, ?)",
            [username, email, password, phonenum],
            (err, result) => {

                if (err) {
                    console.log(err);
                }

                res.send(result);
                console.log(err);
            })
        }

    })

});

module.exports = router;