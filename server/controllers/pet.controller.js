const Pet = require('../models/pet.model');


module.exports.index = (req, res)=>{
    Pet.find().sort({petType:1})
        .then(allPets =>{res.json({results:allPets})})
        .catch(err=>{res.json(err)})
}


module.exports.create = (req, res)=>{

    console.log("REQUEST.BODY LOOKS LIKE THIS--->", req.body)
    Pet.create(req.body)
        .then(newPet =>{res.json({results:newPet})})
        .catch(err=>{res.json(err)})
}

module.exports.show = (req, res)=>{
    Pet.findOne({_id: req.params.id })
    .then(onePet =>{res.json({results:onePet})})
    .catch(err=>{res.json(err)})

}

module.exports.update = (req, res)=>{
    Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
        )
        .then(updatePet =>{res.json({results:updatePet})})
        .catch(err=>{res.json(err.errors)})
}


module.exports.delete = (req,res)=>{
    Pet.deleteOne({_id: req.params.id})
    .then(deletedPet =>{res.json({results:deletedPet})})
    .catch(err=>{res.json(err)})
}
