
//retrieve pledge report from back-end and display on front-end.
function getPledgeReport() {
    var url = "http://localhost:5000/api/pledges/"

    $.get(url, function(data, status){
        //console.log(data, status);
        var result = "<table class='table table-dark table-hover'>";
        for(var i = 0; i < data.length; i++) {
            result += "<tr><td>" + data[i].first_name + " " + data[i].last_name + "</td><td>$" + data[i].amount + "</td><td>" + data[i].datetime + "</td></tr>";
        }
        result += "</table>"
        $("#results_container").html(result);
    });    
}


//take pledge data from the front-end and post it to the back-end.
function addNewPledge() {
    
    var new_entry = {
        //retrieve (from the UI) field values and add them to a new entry here
        //
        datetime: new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate()
    };

    //ajax using POST method to put new_entry up to http://localhost:5000/api/pledges
    //
    //
    //
    //
    //
}