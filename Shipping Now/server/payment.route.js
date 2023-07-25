const express = require('express');
const paymentRoutes = express.Router();
const Razorpay = require('razorpay');
const Transaction = require('./transactions');
const crypto = require("crypto");
const keysecret = " 12werjghweurfufr98098uw48wiuft0pu9898oiuoyw84r8-24rpiuh098f29r ";
// let pay = require('./order.model');

paymentRoutes.route('/order').post(function (req, res) {
    
    var instance = new Razorpay({
        key_id: 'rzp_test_UW5QeJOW1RsnhV',
        key_secret: '2wpIQGUgpEMofc2KW5DjHRbv',
    });
    var options = {
        amount: req.body.amount,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11",
        payment_capture: 1
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json(order)
        }
    });
});


paymentRoutes.route('/').post(function (req, res) {
    const generated_signature = crypto.createHmac('sha256', keysecret)
    generated_signature.update(req.body.razorpay_order_id + "|" + req.body.transactionid)
    if (generated_signature.digest('hex') === req.body.razorpay_signature) {
        const transaction = new Transaction({
            transactionid: req.body.transactionid,
            transactionamount: req.body.transactionamount,
        });
        transaction.save(function (err, savedtransac) {
            if (err) {
                console.log(err);
                console.log('Error');
                return res.status(500).send("Some Problem Occured");
            }
            res.send({ transaction: savedtransac });
        });
    }
    else {
        return res.send('failed');
    }
});


module.exports = paymentRoutes;