
function getDataFromAPI() {

    var url = "http://localhost:5000/api/contacts/"

    $.get(url, function(data, status){
        //console.log(data, status);
        var result = "<ul>";
        for(var i = 0; i < data.length; i++) {
            result += "<li>" + data[i].name + " " + data[i].email + " <button onclick='deleteContact(" + data[i].id + ")'>Delete</button></li>";
        }
        $("#results_container").html(result);
    });    
}

function deleteContact(contact_id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:5000/api/contacts/" + contact_id,
        success: function(data) {
            getDataFromAPI();
        },
        error: function(error) {
            alert("error");
        }
    });
}

function addNew() {
    var name = $("#name").val();
    var email = $("#email").val();

    var rndInt = Math.floor(Math.random() * 1000) + 1;

    var json_data = {
        "id": rndInt,
        "name": name,
        "email": email
    };

    $("#name").val("");
    $("#email").val("");

    $.ajax({
        type: "POST",
        url: "http://localhost:5000/api/contacts",
        data: JSON.stringify(json_data),
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            getDataFromAPI();
        },
        error: function(error) {
            alert("error");
        }
    });
}

$(document).ready(function(){   
    getDataFromAPI();
    
    $("#add_new_btn").click(function(){
        addNew();
    });
});
