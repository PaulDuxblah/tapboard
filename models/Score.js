const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Score = new Schema({
    points: {
        type: Number
    },
    date: {
        type: Date
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    collection: 'scores'
});

module.exports = mongoose.model('Score', Score);