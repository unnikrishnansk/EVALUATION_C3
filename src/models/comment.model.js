const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        body : {type : String, required : true},
        userId : {type : mongoose.Schema.Types.ObjectId , ref : "User" , required : true},
        bookId : {type : mongoose.Schema.Types.ObjectId, ref : "Book" , required : true}
    },
    {
        timestamps : {type : String, required : true}
    }
)

const Comment = mongoose.model("comment" , commentSchema);

module.exports = Comment;