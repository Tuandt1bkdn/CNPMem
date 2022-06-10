const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:trueoptionSuccessStatus:200,
 }
 
//import {jwt} from 'jsonwebtoken'
// import {dotenv} from "./.ENV"
// dotenv.config();
// export { dotenv };
const app = express();
//const morgan = require('morgan');

app.use(cors(corsOptions))

app.use(body_parser.json())

app.use(body_parser.urlencoded({
    extended : true
}))

module.exports = app

// function  authenToken(res, req, next) {
//     const authorizationHeader = req.header['authorization'];
//     console.log(res);
//     // const token = authorizationHeader.split(' ')[1];
//     // if (!token) res.sendStatus(401);

//     // jwt.verify(token, "jwtabc", (err, data) => {
//     //     console.log(err, data);
//     // })
// }

const port = process.env.PORT || 3001 ;


app.listen(port, () => console.log(`Server running on port ${port}`));

const connect = require("./API/connectdatabase");

connect.connect(function(err)  {
if (err) throw err;
console.log("ket noi thanh cong");
}) ;

const route = require("./API/route");
//const { JsonWebTokenError } = require("jsonwebtoken");
route(app);
