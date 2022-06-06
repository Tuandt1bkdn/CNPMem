

const mysql = require ("mysql");
const { response } = require("../../server.js");
const Usersmodels = require("../model/users.models");
const database = require ("../connectdatabase.js");
const jwt = require("jsonwebtoken")
const dotenv = require("/Workspace/Ex1/.ENV")
dotenv.config();


module.exports = {
    get : function(req, res){
        var sql = 'SELECT * FROM biqtzwqiihjmw2npadtd.Account '
    database.query(sql , (err, response) => {
        if (err) {
            console.log("khong the lay du lieu");
        }
        res.json(response);
    }
    )
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
    const {data} = req.body;
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '60s'});
    res.json({accessToken});
  },
  getAppointment : function(req, res){
    var sql = 'SELECT * FROM biqtzwqiihjmw2npadtd.Appointment '
database.query(sql , (err, response) => {
    if (err) {
        console.log("khong the lay du lieu");
    }
    res.json(response);
})
},


}