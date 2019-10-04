console.log("Connected successfully!");

// inptCtrl is a fred variable
function buttonClicked() {
    // need to get programmatic access to input box/ input control
    //can change anything with js that we can change with the editor
    // STANDARD STMT. by id (the id is a string):***  var ctrl = document.getElementById(...)  ***
    var usernameCtrl = document.getElementById("username");  // !! this variable now represents the input box. this variable is now a programmatic control to fjdfklfkj...
    usernameCtrl.value = users[1].username;   //.value   the value attribut   -fhm  This is how you get ???  should be in our notes
    var isadminCtrl = document.getElementById("isadmin");
    isadminCtrl.checked = users[1].isAdmin;
}

function button2Clicked() {
    var inptCtrl = document.getElementById("input"); // again, first thing, get programmatic access to input control
    var userInput = inptCtrl.value;
    console.log("User input is", userInput);
}

var users = [
    {
        "id": 1,
        "username": "adm",
        "password": "adm",
        "firstname": "Normal",
        "lastname": "Admin",
        "phone": "513-555-1212",
        "email": "help@admin.com",
        "isReviewer": true,
        "isAdmin": true
    },
    {
        "id": 2,
        "username": "user",
        "password": "user",
        "firstname": "Normal",
        "lastname": "User",
        "phone": "",
        "email": "",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 3,
        "username": "sa",
        "password": "sa",
        "firstname": "System",
        "lastname": "Admin",
        "phone": "",
        "email": "",
        "isReviewer": true,
        "isAdmin": true
    }
]