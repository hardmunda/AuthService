const express = require('express');
const app = express();

const {PORT} = require('./config/config');



const prepareAndStartServer = () => {

    app.listen(3001, () => {
        console.log(`Server started at port: ${PORT}`);
    })
}

prepareAndStartServer();

