

function getDataFromAPI() {

    //https://data.novascotia.ca/Crime-and-Justice/Crime-Statistics-Crime-Severity-Index/w64p-5ue3
    var url = "https://data.novascotia.ca/resource/w64p-5ue3.json";

    $.get(url, function(data, status){
        alert("Got Data\nStatus: " + status);

        /*
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];

            if (obj.geography != null && obj.geography.indexOf("Halifax") != -1) {
                console.log("Barrington", obj);
            }
        }
        */

        console.log(data);
    });    
    
}

window.addEventListener("load", (event) => {

    const el = document.getElementById("getdata_btn");
    el.addEventListener("click", getDataFromAPI, false);

});









