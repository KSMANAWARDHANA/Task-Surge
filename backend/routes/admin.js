const router = require("express").Router();//import Router from express
let Student = require("../models/user");

//implementing CRUD 

//01-->route to add a user by admin

//when we call this url in frontend it will be like -->http//localhost:8070/student/create
//because for different functions like create,update or delete we need diffrent urls' this is what I did here
//and post() is a http request method 
router.route("/create").post((req,res)=>{
    //here we passing the data to database as body of the request
    const id = Number(req.body.id);//because this is an integer data type, but  for strings it doesn't matter
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const dateOf_Birth = Date(req.body.dateOf_Birth);
    const  mobile= Number(req.body.mobile);
    const status = Boolean(req.body.status);
    const password = req.body.password;
    const acc_type = req.body.acc_type;

    //creating a object for user model imported above
    const newStudent = new Student({
        id,
        first_name,
        last_name,
        email,
        dateOf_Birth,
        mobile,
        status,
        password,
        acc_type

    })

    //now we have to insert or save this object in mongodb database
    //then catch is like if else and also it is like a promise
    newStudent.save().then(()=>{
        res.json("Student Added") //this will give as a response to frontend
    }).catch((err)=>{
        console.log(err);
    })
})

//02.to view details by admin--> get details (read data in database)
router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})

//03.view one user detail
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user=await Student.findById(userId) //findById use here because as the primary key i used ID  .. if it is mail or any use findOne method
        .then(()=>{
            res.status(200).send({status:"User Fetched",user:user})
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"error with get user",error:err.message});
        })

    
})
         

module.exports = router;