'use strict';
const bodyParser = require('body-parser');
const cors = require('cors');
module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors({
        origin: 'http://localhost:3000'
    }));
    function interceptor(req, res, next) {
        const oldResp=res.send;
        res.send = function(data){
            console.log(arguments[0]);
            arguments[0]=`{\n"code":200,\n"message":"Success",\n"data":${arguments[0]}\n }`;
    
            oldResp.apply(res, arguments);
        }
        next();
    }
    app.use(interceptor);  
};