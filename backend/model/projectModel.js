const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectTitle: {
        type: String,
        required: true
    },
    projectManager: {
        type: Schema.Types.ObjectId,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    TeamLeader: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Members: {
        type: Array,
        required: true
    },
    Document: {
        type: String,
        required: true
    },
    Reports: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('project',projectSchema);