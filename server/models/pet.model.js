const mongoose = require("mongoose")


const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name is required!"],
        minLength: [3, "Name must be at least 3 characters long"],
        maxLength: [100000000, "Name can't be that long"]
    },

    petType: {
        type: String,
        required: [true, "Pet type is required"],
        minLength: [3, "Pet type must be at least 3 characters long"],
    },

    desc: {
        type:String,
        required: [true, "there must be a description"],
        minlength: [3, "description must be at least 3 characters long"]
    },

    skills1: {
        type:String,
        required: [false],
    
    },
    skills2: {
        type:String,
        required: [false],
        
    },

    skills3: {
        type:String,
        required: [false],
    
    }

}, {timestamps:true})


const Pet = mongoose.model("Pet", PetSchema );

module.exports = Pet;
