const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    name: {
        type   : String,
        require: true
    },
    email: {
        type   : String,
        require: true,
        unique : true
    },
    pass: {
        type   : String,
        require: true
    }
});


modelNames.exports = model('User', UserSchema)



