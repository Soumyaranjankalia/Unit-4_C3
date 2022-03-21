const express = require("express")
const app = express()

app.use(express.json())

const userController = require("./controllers/user-controller")
const bookController = require("./controllers/book-controller")

app.use("/user", userController)
app.use("/book", bookController)

app. listen(4000, async() => {
    try{
        await connect()
    }
    catch(err){
        console.log(Error)
    }
    console.log("Connecting to the port 4000")
})