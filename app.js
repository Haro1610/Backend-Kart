const express = require('express');
const userRouter = require('./src/modules/users/user.routes');
const circuitRouter = require('./src/modules/circuits/circuit.routes');
const driversRouter = require('./src/modules/drivers/driver.routes');
const race_resultRouter = require('./src/modules/race_results/race_results.routes');
const raceRouter = require('./src/modules/races/race.routes');
const path = require('path');
const Database = require('./src/core/database');

const app = express(); 

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

app.use('/api',userRouter);
app.use('/api',circuitRouter);
app.use('/api',driversRouter);
app.use('/api',race_resultRouter);
app.use('/api',raceRouter);
app.get('/', (req, res) => {
    res.send('this api works!');
});


Database.connect().then(() => {
    // Listen to port
    app.listen(port, () => {
        console.log('App is listening to port ' + port);
    });
});
