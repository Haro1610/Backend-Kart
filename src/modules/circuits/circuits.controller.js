const Database = require("../../core/database");
const Circuit = require("./circuit.model");

const circuitController = {
    getAll: (req, res) => {
        const circuit = new Circuit();
        circuit.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const circuit = new Circuit();
        circuit.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const new_circuit = {
            name:  req.headers.name,
            address: req.headers.address,
            phone_number : req.headers.phone,
            circuit_distance: req.headers.distance
        };
        console.log(new_circuit)
        Database.collection("circuits").insertOne(new_circuit, function(err, res) {
            if(err) console.log("err");
            else console.log("Todo bien");
    });
    res.send("Todo bien");
    //delete: (req,res) =>{
        
    //}
    }
}

module.exports = circuitController;