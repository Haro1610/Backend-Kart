const Database = require("../../core/database");
const Circuit = require("./circuit.model");
const { ObjectId } = require('mongodb');

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
                console.log("No hay circuito")
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
    },
    delete: (req,res) => {
        console.log("vamos a borrar a :" +req.params.id)
        Database.collection("circuits").deleteOne({_id: ObjectId(req.params.id)},function(err, res) {
        if (err){
            console.log(err)
            res.send({status: "Not Deleted"})
        }
    });
    res.send({status: "Ok, hemos borrado a: "+req.params.id})
    }
}

module.exports = circuitController;