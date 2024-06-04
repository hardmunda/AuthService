const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const app = express();
// const {User} = require('./models/index');

const prepareAndStartServer = async() => {
     
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(3001, async () => {
        console.log(`Server started at port: ${PORT}`);
    }) 
    // await User.truncate();

}

prepareAndStartServer();

