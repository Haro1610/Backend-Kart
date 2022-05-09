const Database = require("../../core/database");
const Race = require("./race.model");

const raceController = {
    getAll: (req, res) => {
        const race = new Race();
        race.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const race = new Race();
        race.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const new_race = {
            "name": req.headers.name,
            "number_of_laps": req.headers.number_of_laps,
            "date": req.headers.date,
            "circuit": req.headers.circuit, 
            "drivers": req.headers.drivers,
            "capacity": req.headers.capacity,
            "status": "open"
        };
        Database.collection("races").insertOne(new_race, function(err, res) {
        if(err) console.log("err");
        else console.log("Todo bien")
    });
    
    res.send("Todo bien");
    //delete: (req,res) =>{
        
    //}
    }
}

module.exports = raceController;