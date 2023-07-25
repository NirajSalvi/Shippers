const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Ship = new Schema({
    ship_name: {
        type: String
    },
    source: {
        type: String
    },
    destination: {
        type: String
    },
    capacity: {
        type: Number
    },
    // order: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Order"
    // }]
}, {
    collection: 'ships'
});

module.exports = mongoose.model('Ship', Ship);