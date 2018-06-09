const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Score = new Schema({
    points: {
        type: Number,
        required: true
    },
    date: {
        type: Date
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    collection: 'scores'
});

module.exports = mongoose.model('Score', Score);