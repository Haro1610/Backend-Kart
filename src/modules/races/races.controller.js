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
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const new_race = {
            "name": req.body.name,
            "number_of_laps": req.body.number_of_laps,
            "date": req.body.date,
            "circuit": req.body.circuit, 
            "drivers": req.body.drivers
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