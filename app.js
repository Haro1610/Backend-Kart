const express = require('express');
const userRouter = require('./src/modules/users/user.routes');
const path = require('path');
const Database = require('./src/core/database');

const app = express(); 

const port = process.env.PORT || 3000;

app.use('/api',userRouter);
app.get('/', (req, res) => {
    res.send('this api works!');
});

Database.connect().then(() => {
    // Listen to port
    app.listen(port, () => {
        console.log('App is listening to port ' + port);
    });
});
