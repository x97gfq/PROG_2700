
function buttonClicked() {
    
    var username_box = document.getElementById('username');

    alert(username_box.value);

}

window.addEventListener("load", function(event) {

    document.getElementById("go_btn").addEventListener("click", buttonClicked, false);

});
