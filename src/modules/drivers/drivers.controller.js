const Database = require("../../core/database");
const Driver = require("./driver.model");

const driversController = {
    getAll: (req, res) => {
        const drivers = new Driver();
        drivers.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const driver = new Driver();
        driver.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const new_driver = {
            name:  req.headers.name,
            birthdate: req.headers.birthdate,
            number: req.headers.number,
            picture: req.headers.picture
        };
        console.log(new_driver)
        Database.collection("drivers").insertOne(new_driver, function(err, res) {
        if(err) console.log("err");
        else console.log("Todo bien");
    });
    res.send("Todo bien");
    //delete: (req,res) =>{
        
    //}
    }
}

module.exports = driversController;