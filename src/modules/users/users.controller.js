const Database = require("../../core/database");
const User = require("./user.model");


const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const new_user = {
            username:  req.body.username,
            email: req.body.email,
            password: req.body.password,
            number: req.body.number,
            picture: req.body.picture,
            level: req.body.level
        };
        Database.collection("users").insertOne(new_user, function(err, res) {
        if(err) console.log("err");
        else console.log("Todo bien")
    });
    res.send({token: "si" })
    },
    delete: (req,res) => {
        console.log("vamos a borrar a :" +req.params.email)
        Database.collection("users").deleteOne({email: req.params.email},function(err, res) {
        if (err){
            console.log(err)
            res.send({status: "Not Deleted"})
        }
    });
    res.send({status: "Ok, hemos borrado a: "+req.params.email})
    },
    update: (req,res) => {
        console.log("Vamos a actualizar: " + req.body.email +'  number: ' + req.body.number );
        const updated_user = {
            username:  req.body.username,
            email: req.body.email,
            password: req.body.password,
            number: req.body.number,
            picture: req.body.picture,
            level: req.body.level
        };
        Database.collection("users").updateOne(
        {email: req.body.email},
        { $set: { "username" : updated_user.username , 
        "email" : updated_user.email,"password": updated_user.password,"number": req.body.number, "picture":updated_user.picture, "level":req.body.level}},
        function(err, res) {
            if (err){
                console.log(err)
                res.send({status: "Not updated"})
            }
        });
        res.send({message:"se ha actualizado a : "+req.body.username})
    }
}

module.exports = UsersController;