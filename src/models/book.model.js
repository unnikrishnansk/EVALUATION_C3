const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        likes : {type : Number, required : false, min : 0},
        content : {type: String, required : true},
        userId : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true}
    },
    {
        timestamps : {type : String, required : true}
    }
)


const Book = mongoose.model("book", bookSchema);

module.exports = Book;