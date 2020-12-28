const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    birthDate: {type: Date, required: true, default: Date.now},
    photo: {type: String, default: null},
    status: {type: String, default: null},
    city: {type: String, default: null},
    maritalStatus: {type: String, default: null},
    education: {type: String, default: null},
    job: {type: String, default: null},
    dateCreator: {type: Date, default: Date.now},
    posts: [{type: Types.ObjectId, ref: 'Post'}]
});

module.exports = model('User', schema);