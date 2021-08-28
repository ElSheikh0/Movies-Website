const s5b_buttn = document.getElementById("sub00_bu");


s5b_buttn.addEventListener("click", () => {
    let name_in = document.getElementById("name");
    let email_in = document.getElementById("email");
    let password_in = document.getElementById("pas");

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    var naw_account = {
        name: name_in.value,
        email: email_in.value,
        password: password_in.value,
        type: "user",

    }

    accounts.push(naw_account);
    localStorage.setItem("accounts", JSON.stringify(accounts));


    window.location.href = "login.html";
});