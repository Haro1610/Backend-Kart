const Database = require("../../core/database");
const Race_result = require("./race_result.model");

const race_resultController = {
    getAll: (req, res) => {
        const race_result = new Race_result();
        race_result.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const race_result = new Race_result();
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const new_race_result = {
            results:  req.body.results,
            number_of_laps: req.body.number_of_laps,
            race_id: req.body.race_id,
            race_name: req.body.race_name,
            date: req.body.date
        };
        console.log(new_race_result)
        Database.collection("race_results").insertOne(new_race_result, function(err, res) {
        if(err) console.log("err");
        else console.log("Todo bien")
    });
    
    res.send("Todo bien");
    //delete: (req,res) =>{
        
    //}
    }
}

module.exports = race_resultController;