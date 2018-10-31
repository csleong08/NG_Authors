const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/authordb", {useNewUrlParser:true}, 
(errs)=>console.log(errs?errs:"db gucci"));

const AuthorSchema = new mongoose.Schema({
    author: {
        type: String, 
        minlength: [2, "Your name is too short, a minimum of two characters are required"]
    }
}, {timestamps:true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
