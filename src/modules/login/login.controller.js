const Database = require("../../core/database");
const Login = require("./login.model");

const LogInController = {
    updateOne: (req,res) =>{
        const login = new Login();
        login.getOne(req.body).then(result => {
            if(result) {
                usuario = result;
                usuario.token = "si";
                Database.collection("users").updateOne({_id: usuario._id},{$set: usuario}, function(err, res) {
                    if(err) console.log("No se pudo");
                    else console.log("Se pudo")
                });
            } 
            else {
                res.sendStatus(404);
            }
        });
        res.send()

        /*

    */
    //res.send("Todo bien")  
    }
}

module.exports = LogInController;