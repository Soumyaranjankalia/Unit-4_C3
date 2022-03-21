const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb://localhostr:27017/coding-3")
}

module.exports = connect