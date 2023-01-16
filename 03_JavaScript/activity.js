
function updateText() {
    var username = document.getElementById("username").value;
    var output_location = document.getElementById("output");
    output_location.innerHTML = username.toUpperCase();
}

window.addEventListener("load", (event) => {
    const el = document.getElementById("username");
    el.addEventListener("change", updateText, false);
});
