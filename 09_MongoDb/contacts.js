
function getDataFromAPI() {
    var url = "http://localhost:5000/api/contacts/"
    $.get(url, function(data, status){
        //console.log(data, status);
        var result = "<table>";
        for(var i = 0; i < data.length; i++) {
            result += "<tr><td>" + data[i].name + "</td><td>" + data[i].email + "</td><td><button onclick='deleteContact(" + data[i].id + ")'>Delete</button></td></tr>";
        }
        result += "</table>";
        $("#results_container").html(result);
    });    
}

function deleteContact(id) {
    //send data to the server
    $.ajax({
        type: "DELETE",
        url: "http://localhost:5000/api/contacts/" + id,
        success: function(data) {
            //everything worked ok!
            getDataFromAPI();
        },
        error: function(error) {
            //uh oh :(
            alert("error");
        }
    });
}

function addNewContact() {

    //name, email - get their values
    var name = $("#name").val();
    var email = $("#email").val();

    if (name == "" || email == ""){
        //we could also check length
        //we could also check email has a @ and a .
        //
        alert("Both fields are required.")
    } else {
        var rndInt = Math.floor(Math.random() * 1000) + 1;//hack, just to get a random id for a new entry

        //create the data sructure to send to the server
        var json_data = {
            "id": rndInt,
            "name" : name,
            "email" : email
        };
        
        //send data to the server
        $.ajax({
            type: "POST",
            url: "http://localhost:5000/api/contacts",
            data: JSON.stringify(json_data),
            contentType: "application/json",
            dataType: "json",
            success: function(data) {
                //everything worked ok!
                $("#name").val("");
                $("#name").focus("");
                $("#email").val("");
                getDataFromAPI();
            },
            error: function(error) {
                //uh oh :(
                alert("error");
            }
        });
    }
}

$(document).ready(function(){   
    getDataFromAPI();

    $("#name").focus("");

    $("#add_new_btn").click(function(){
        addNewContact();
    });
});
