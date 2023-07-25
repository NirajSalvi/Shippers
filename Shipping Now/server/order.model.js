const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let order = new Schema({
    customer_name: {
        type: String
    },
    ship_name: {
        type: String
    },
    item_des: {
        type: String
    },
    source: {
        type: String
    },
    destination: {
        type: String
    },
    weight: {
        type: Number
    },
    price: {
        type: Number
    },
    email: {
        type: String
    },
    payment_status: {
        type: String
    }
    // ship: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Ship"
    // }
}, {
    collection: 'orders'
});

module.exports = mongoose.model('Order', order);