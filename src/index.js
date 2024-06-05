const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const UserRepository = require('./repository/user-repository');

const app = express();
const UserService = require('./services/user-service');

const prepareAndStartServer = async() => {
     
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(3001, async () => {
        console.log(`Server started at port: ${PORT}`);
    }) 
    const user = new UserService;
    // const newToken = user.createToken({email: 'sanket@admin.com', id: 1});
    // console.log("new token is", newToken);
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNzE3NTg1MzYwLCJleHAiOjE3MTc1ODUzOTB9.3Piu9wY5d-qR9rOYs3AzpP_Ho_qeHONevZl8itdp-m0';
    // const response = user.verifyToken(token);
    // console.log(response);

}

prepareAndStartServer();

