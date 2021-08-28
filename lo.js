if (localStorage.getItem("currentUser") != null) {
    window.location.href = "index.html";
}
const submit = document.getElementById("sub_but2");
const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
submit.addEventListener("click", () => {
        var user_email = document.getElementById("email_login").value;
        var user_password = document.getElementById("pas_login").value;
        var found = false;

        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].email == user_email) {
                found = true;
                if (accounts[i].password == user_password) {
                    localStorage.setItem("currentUser", JSON.stringify(accounts[i]));
                    if (accounts[i].type == "admin") {
                        window.location.href = "admin.html";
                        break;
                    } else {
                        window.location.href = "index.html";
                        break;
                    }

                } else {

                    alert("Verify the password and email");
                    break;
                }
            }
        }
        if (!found) {

        }
    }

);