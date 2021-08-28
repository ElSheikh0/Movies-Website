const accounts3 = JSON.parse(localStorage.getItem("currentUser"));
if (localStorage.getItem("currentUser") != null) {
    if (accounts3.type == "admin") {
        document.getElementById("admin").style.display = "ltr";

    } else {
        document.getElementById("admin").style.display = "none";
    }
} else {
    document.getElementById("admin").style.display = "none";
}

if (localStorage.getItem("currentUser") != null) {
    document.getElementById("login").style.display = "none";
} else {
    document.getElementById("login").style.display = "ltr";

}
if (localStorage.getItem("currentUser") == null) {
    document.getElementById("logout").style.display = "none";
} else {
    document.getElementById("logout").style.display = "ltr";
}
const submit2 = document.getElementById("logout");
submit2.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
    }

);

function changeColor(color) {
    var color = document.getElementById('back_color').value;
    localStorage.setItem("back_ground", color);
    document.getElementById("color").style.backgroundColor = color;
}