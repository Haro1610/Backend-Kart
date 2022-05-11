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
            name:  req.body.name,
            description: req.body.description,
            address: req.body.address,
            phone_number : req.body.phone_number,
            circuit_distance: req.body.circuit_distance
        };
        console.log(new_circuit)
        Database.collection("circuits").insertOne(new_circuit, function(err, res) {
            if(err) console.log("err");
            else console.log("Todo bien");
    });
    res.send({status: "Se ha creado el circuito"});
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
    },
    update: (req,res) => {
        console.log("Vamos a actualizar: " + req.body.name );
        const updated_circuit = {
            name:  req.body.name,
            description: req.body.description,
            address: req.body.address,
            phone_number : req.body.phone_number,
            circuit_distance: req.body.circuit_distance
        };
        Database.collection("circuits").updateOne(
        {_id: ObjectId(req.params.id)},
        { $set: { "name" : updated_circuit.name , "description" : updated_circuit.description,"address": updated_circuit.address,"phone_number": req.body.phone, "circuit_distance":updated_circuit.distance}},
        function(err, res) {
            if (err){
                console.log(err)
                res.send({status: "Not updated"})
            }
        });
        res.send({message:"se ha actualizado a : "+req.body.name})
    }
}

module.exports = circuitController;