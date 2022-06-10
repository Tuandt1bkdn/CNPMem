

const mysql = require ("mysql");
const { response } = require("../../server.js");
const Usersmodels = require("../model/users.models");
const database = require ("../connectdatabase.js");
const jwt = require("jsonwebtoken")
//const ACCESS_TOKEN_SECRET = jwtabc
// const dotenv = require("/Workspace/Ex1/.env")
// dotenv.config();


module.exports = {
    getAccount : function(req, res){
        var sql = 'SELECT * FROM biqtzwqiihjmw2npadtd.Account '
    database.query(sql , (err, response) => {
        if (err) {
            console.log("khong the lay du lieu");
        }
        res.json(response);
    })
},
    getMedicine : function(req, res){
        var sql = 'SELECT * FROM biqtzwqiihjmw2npadtd.Medicine '
    database.query(sql , (err, response) => {
        if (err) {
        console.log("khong the lay du lieu");
        }
        res.json(response);
        })
},
getuser : function(req, res){
    var sql = 'SELECT * FROM biqtzwqiihjmw2npadtd.Patient '
database.query(sql , (err, response) => {
    if (err) {
    console.log("khong the lay du lieu");
    }
    res.json(response);
    })
},
  update : function(req, res) {
        var data = req.body
        console.log(data)
    var sql = 'UPDATE account SET Role = \'3\' where UserName = \'Huong\''
        console.log('HFfhsf');
        database.query(sql, [data, 'Role_ID' ], (err, response) => {
            if (err) throw err
            console.log("message: 'Update success!'");
    })
    res.json(response);
  },
  postAccount : function(req, res) {
      var Account = req.body
        
      
      console.log(Account)

        var sql = `INSERT INTO biqtzwqiihjmw2npadtd.Account(UserName, Password, Role, IsActive, Role_ID)     VALUES("${Account.UserName}", "${Account.Password}", "${Account.Role}", "${Account.IsActive}", "${Account.Role_ID}")`
        database.query(sql, (err, res)=> {
            if (err)  throw err ;
            res.json(Account)
        })
  },
  postPatient : function(req, res) {
    var Patient = req.body
      
    console.log(Patient)

      var sql = `INSERT INTO biqtzwqiihjmw2npadtd.Patient(Patient_ID, Name, Image, Phone, Email)     VALUES("${Patient.Patient_ID}", "${Patient.Name}", "${Patient.Image}", "${Patient.Phone}", "${Patient.Email}")`
      database.query(sql, (err, res)=> {
          if (err)  throw err ;
          //res.send(Patient)
      })
  },
  signin :  function (req, res)  {
    const data = req.body;
    console.log(data);
    const accessToken = jwt.sign(data, "jwtabc", {expiresIn: '60s'});
    res.json({accessToken});
  },
  getAppointment : function(req, res){
    var sql = 'SELECT biqtzwqiihjmw2npadtd.Appointment.Appointment_ID, biqtzwqiihjmw2npadtd.Patient.Name, biqtzwqiihjmw2npadtd.Doctor.Name, biqtzwqiihjmw2npadtd.Appointment.DateTime FROM biqtzwqiihjmw2npadtd.Appointment, biqtzwqiihjmw2npadtd.Patient , biqtzwqiihjmw2npadtd.Doctor WHERE biqtzwqiihjmw2npadtd.Appointment.Patient_ID = biqtzwqiihjmw2npadtd.Patient.Patient_ID and biqtzwqiihjmw2npadtd.Appointment.Doctor_ID = biqtzwqiihjmw2npadtd.Doctor.Doctor_ID';
database.query(sql , (err, response) => {
    if (err) {
        console.log("khong the lay du lieu");
    }
    res.json(response);
})
},


}