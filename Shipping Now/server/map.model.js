const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let map = new Schema({
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
    collection: 'maps'
});

module.exports = mongoose.model('Map', map);