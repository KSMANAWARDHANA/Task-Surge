const router = require("express").Router();
let Notes = require("../models/notes");

//to create a note
router.route("/add").post((req,res)=>{
    const note_number = Number(req.body.note_number);
    const title = req.body.title;
    const description = req.body.description;
   
    const newNote = new Notes({
        note_number,
        title,
        description,
    })

    newNote.save().then(()=>{
        res.json("Notes Added") 
    }).catch((err)=>{
        console.log(err);
    })
})

//02.to view notes
router.route("/note").get((req,res)=>{
    Student.find().then((notes)=>{
        res.json(notes)
    }).catch((err)=>{
        console.log(err)
    })
})

//update notes
//here to update a note we need to identify which node should update
//in notes.js under models folder it creates a unique key in mongodb(like primary key)-->we can pass this id to identify
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id; //fetching userId from database, req.params.id mean ud comes as a parameter of the request
    //before updating we should fetch previous data or updated  data-->for this i use js destructuring method
    const{note_number,title,description}=req.body;

    const updateNote = {
        note_number,
        title,
        description
    }
    //check there is a note 
    const update = await Notes.findByIdAndUpdate(userId,updateNote).then(()=>{
        //sending response to frontend to inform whether successfully updated or not
        //res.status define the status of the error as it is a 404,501 or 200 etc
        res.status(200).send({status:"User Updated",user:update })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data"});
    })
})

//03.delete notes
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Notes.findByIdAndDelete(userId)
        .then(()=>{
            res.status(200).send({status: "user deleted"});
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with delete note"});
        })
})



module.exports = router;