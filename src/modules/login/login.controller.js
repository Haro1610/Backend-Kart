const Database = require("../../core/database");
const Login = require("./login.model");

const LogInController = {
  updateOne: (req, res) => {
    const login = new Login();
    login.getOne(req.body).then((result) => {
      if (result) {
        usuario = result;
        usuario.token = "si";
        Database.collection("users").updateOne(
          { _id: usuario._id },
          { $set: usuario },
          function (err, response) {
            if (err) {
                res.sendStatus(404)
            } else {
              console.log("Se pudo");
            }
          }
        );
        //res.sendStatus(200);
        res.send({token: "si" })
      } else {
        res.sendStatus(404);
      }
    });
  },
};

module.exports = LogInController;
