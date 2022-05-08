//npm i check-password-strength

const { passwordStrength } = require('check-password-strength')


function PassGen() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{}|;:,./<>?~";
  
    for (var i = 0; i < 14; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  var mypassword = PassGen()

  console.log("Here you go -->  " + mypassword + " <-- Your password is " + passwordStrength(mypassword).value);
