const Database = require("../../core/database");
const Race = require("./race.model");
const { ObjectId } = require('mongodb');


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
            "name": req.body.name,
            "number_of_laps": req.body.number_of_laps,
            "date": req.body.date,
            "circuit": req.body.circuit, 
            "drivers": req.body.drivers,
            "capacity": req.body.capacity,
            "status": "open"
        };
        Database.collection("races").insertOne(new_race, function(err, res) {
        if(err) console.log("err");
        else console.log("Todo bien")
    });
    
    res.send({message:"Todo correcto"});
    },

    delete: (req,res) => {
        console.log("vamos a borrar a :" +req.params.id)
        Database.collection("races").deleteOne({_id: ObjectId(req.params.id)},function(err, res) {
        if (err){
            console.log(err)
            res.send({status: "Not Deleted"})
        }
    });
    res.send({status: "Ok, hemos borrado a: "+req.params.id})
    }
}

module.exports = raceController;