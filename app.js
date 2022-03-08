const express = require('express');

const app = express(); 

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('this api works!');
});

app.listen(port, function(){
    console.log(`app is running in port ${port}...`);
});