const express = require('express')
const app = express()
app.use(express.json())

const cors =require("cors")
app.use(cors())
const db = require('./models')
///roouter 
const PostRouter = require('./routes/Post')
app.use("/post" , PostRouter)
////////////////////////////////
db.sequelize.sync().then(() =>{
app.listen(3001,() =>{
    console.log("server ecourter au port 3000");
});
}) 