const PetController = require("../controllers/pet.controller");


module.exports = app =>{
    app.get("/api/pets", PetController.index)
    app.post("/api/pets/create", PetController.create)
    app.get("/api/pets/:id", PetController.show)
    app.put("/api/pets/update/:id", PetController.update)
    app.delete("/api/pets/delete/:id", PetController.delete)
}
