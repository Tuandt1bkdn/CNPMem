const medical_controller = require ("./controller/medical_controller.js")

const Role = require("./controller/medical_controller.js")

function  authenToken(res, req, next) {
    //const AuthorizationHeader = req.headers['Authorization'];
    console.log(res);
    //console.log(JSON.stringify(req.headers));
    // const token = authorizationHeader.split(' ')[1];
    // if (!token) res.sendStatus(401);

    // jwt.verify(token, "jwtabc", (err, data) => {
    //     console.log(err, data);
    // })
}

module.exports = function(app) {

    app.route("/Account").get(authenToken, medical_controller.getAccount);

    app.route("/Medicine").get(medical_controller.getMedicine);

    app.route("/user").get(medical_controller.getuser);

    app.route("/Appointment").get(medical_controller.getAppointment);
    
    app.route('/Role/:Role_ID').put(Role.update);

    app.route("/Accounts").post(medical_controller.postAccount);
        
    app.route("/Patient").post(medical_controller.postPatient);

    //app.route("/signup").post(medical_controller.signup)

    app.route("/signin").post(medical_controller.signin)

    //app.route("/secret").post(medical_controller.secret)
    };

