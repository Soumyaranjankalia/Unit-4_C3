const mongoose = require("mongoose")

const publicationSchema = new mongoose.Schema({
    name: {type: String, requires: true},
    bookId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "book"
    }
},{
    timestamps : {types:String, required:true}
})
const Publication = mongoose.model("publication", publicationSchema)

module.exports= Publication