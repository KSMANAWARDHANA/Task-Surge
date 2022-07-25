const express = require("express");
const app = express();
const mongoose = require("mongoose");//mongoose used to connect with MongoDB
const cors = require("cors");
const bodyParser = require("body-parser")
require("dotenv").config();//to access .env file

const PORT = process.env.PORT || 8070;
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParse:true,
    useUnifiedTopologyL:true,
    useFindAndModify:false
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb connection is success..!!!");
})

// const studentsRouter = require("./routes/students.js") //import students.js in route folder
// app.use("/student",studentsRouter)//here /student is used to create the URL for frontend -->it is like executing students.js in routes folder when call from frontend

const loginRouter = require("./routes/login.js") 
app.use("/login",loginRouter)

const adminRouter = require("./routes/admin.js") 
app.use("/admin",adminRouter)

const notesRouter = require("./routes/note.js") 
app.use("/note",notesRouter)


app.listen(PORT,() => {
    console.log(`Server is up and running on port : ${PORT}`)
})
