const mongoose = require('mongoose');
const { userInfo } = require('os');
const Joi = require("joi");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    id:{
        type:Number,
        required:true // here required is like a backend validation
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dateOf_Birth:{
        type:Date,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    acc_type:{
        type:String,
        required:true
    }

});

//token authentication
userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("Student",userSchema) //here passing two parameters for model function."student" is like the table name where data from schema coming.second parameter is the schema I created above

//validation
const validate = (data) => {
	const schema = Joi.object({
        id:Joi.string().required().label("ID"),
		first_Name: Joi.string().required().label("First Name"),
		last_Name: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
        dateOf_Birth: Joi.string().email().required().label("DOB"),
        mobile: Joi.string().email().required().label("mobile"),
        status: Joi.string().email().required().label("status"),
		password: passwordComplexity().required().label("Password"),
		acc_type: passwordComplexity().required().label("Acc_Type"),
	});
	return schema.validate(data);
};

module.exports = {User,validate};//should export student model to use in routes