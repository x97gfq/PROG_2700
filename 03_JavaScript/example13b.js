
function buttonClicked() {
    var username_box = document.getElementById('username');
    
    if (username_box.value != '') {

        username_box.style.backgroundColor = 'white';

        alert('Welcome, ' + username_box.value);

        username_box.value = '';
    } else {

        username_box.style.backgroundColor = 'red';

        alert('You m ust enter a username');
    }

}

window.addEventListener("load", function(event) {

    document.getElementById("go_btn").addEventListener("click", buttonClicked, false);

});
