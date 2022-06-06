const medical_controller = require ("./controller/medical_controller.js")

const Role = require("./controller/medical_controller.js")

module.exports = function(app) {

    app.route("/Account").get(medical_controller.get);

    app.route("/Appointment").get(medical_controller.getAppointment);
    
    app.route('/Role/:Role_ID').put(Role.update);

    app.route("/Accounts").post(medical_controller.postAccount);
        
    app.route("/Patient").post(medical_controller.postPatient);

    //app.route("/signup").post(medical_controller.signup)

    app.route("/signin").post(medical_controller.signin)

    //app.route("/secret").post(medical_controller.secret)
    };

