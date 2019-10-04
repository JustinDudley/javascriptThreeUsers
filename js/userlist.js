
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

function refresh() {
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = ""; //dfd   all the html inside the T body tags? . clearing out anything that was there
    for(var user of users) {
        
        if(!user.isAdmin) {   // this is new code
            continue;       // stay in the loop, but go back to the beg. of loop.  skip the stuff below, go back
        }

        var tr = "<tr>";  //set tr for the first time...
        tr += `<td>${user.id}</td>` //  note    `    `   `   `    `   `   `   `   `       `     `  `  
        tr += `<td>${user.username}</td>`
        tr += `<td>${user.firstname}</td>`
        tr += `<td>${user.lastname}</td>`
        tr += `<td>${user.isReviewer}</td>`
        tr += `<td>${user.isAdmin}</td>`
        tr += "</tr>";   // ...then adds to it, via string concatenation.  "Have to put the data between the two"
        tbodyCtrl.innerHTML += tr;
    }
    
}











