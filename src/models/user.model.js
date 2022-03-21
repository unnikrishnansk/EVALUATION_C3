const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName : {type : String, required : true, minlength : 3, maxlength : 30},
        lastName : {type : String, required : false, minlength : 3, maxlength : 30},
        age : {type : Number, required : true},
        email : {type : String, required : true, unique : true},
        
    },
    {
        timestamps : {type : String, required : true}
    }
)

const User = mongoose.model("user" , userSchema);

module.exports = User;