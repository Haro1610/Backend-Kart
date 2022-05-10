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
            password: req.body.password
        };
        Database.collection("users").insertOne(new_user, function(err, res) {
        if(err) console.log("err");
        else console.log("Todo bien")
    });
    res.send({token: "si" })
    //delete: (req,res) =>{
        
    //}
    }
}

module.exports = UsersController;