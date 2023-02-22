
function getDataFromAPI() {

    var url = "http://localhost:5000/api/contacts/"

    $.get(url, function(data, status){
        //console.log(data, status);
        var result = "<ul>";
        for(var i = 0; i < data.length; i++) {
            result += "<li>" + data[i].name + " " + data[i].email + "</li>";
        }
        $("#results_container").html(result);
    });    
}

$(document).ready(function(){   
    getDataFromAPI();
});







