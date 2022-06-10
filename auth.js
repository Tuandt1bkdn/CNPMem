const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:trueoptionSuccessStatus:200,
 }
const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken")
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

const port =  5000 ;
app.get('/account', (res, req) => {
    var sql = 'SELECT * FROM biqtzwqiihjmw2npadtd.Account '
    database.query(sql , (err, response) => {
        if (err) {
            console.log("khong the lay du lieu");
        }
        //res.json(response);
    })
});

app.post('/signin', (res,req) => {
    const data = req.body;
    console.log(data);
    const accessToken = jwt.sign({username : data.username}, "jwtabc", {expiresIn: '60s'} )
    res.json({accessToken});
});

function  authenToken(res, req, next) {
    //     const authorizationHeader = req.header['authorization'];
    //     console.log(res);
    //     // const token = authorizationHeader.split(' ')[1];
        // if (!token) res.sendStatus(401);
    
        // jwt.verify(token, "jwtabc", (err, data) => {
        //     console.log(err, data);
        // })
    }

let refreshToken = [];

app.post('/refreshToken', (res,req) => {
    const refreshToken = req.body.token;
    if (!refreshToken) res.sendStatus(401);
    if (!refreshToken.include(refreshToken)) res.sendStatus(403);
        
    jwt.verify(refreshToken, "jwtabc123", (err, data) => {
            console.log(err, data);
            if (err) res.sendStatus(403);
            const refreshToken = jwt.sign({username : data.username}, "jwtabc123", {expiresIn: '60s'});
            refreshTokens.push(refreshToken);
            res.json({accessToken, refreshToken});
        
        })
});

app.post('/signout', (res, req) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter(refToken => refToken !== refreshToken );
    res.sendStatus(200);

});




app.listen(port, () => console.log(`Server running on port ${port}`));

const connect = require("./API/connectdatabase");
const database = require ("./API/connectdatabase.js");
connect.connect(function(err)  {
if (err) throw err;
console.log("ket noi thanh cong");
}) ;

//const route = require("./API/route");

//route(app);
