const s6b_buttn = document.getElementById("contact-submit");
const s7b_buttn = document.getElementById("remove");
s6b_buttn.addEventListener("click", () => {
    let name_in = document.getElementById("name");
    let email_in = document.getElementById("email");
    let password_in = document.getElementById("pas");
    let type_in = document.getElementById("type");
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    if (!type_in.value) {
        type_in.value = "user";

    }
    var naw_account = {
        name: name_in.value,
        email: email_in.value,
        password: password_in.value,
        type: type_in.value,

    }

    accounts.push(naw_account);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    window.location.href = "admin.html";
});
s7b_buttn.addEventListener("click", () => {
    const accounts01 = JSON.parse(localStorage.getItem("accounts"));
    let email_iin = document.getElementById("email_remove");
    for (var i = 0; i < accounts01.length; i++) {
        if (accounts01[i].email == email_iin.value) {
            accounts01.splice(i, 1);
            break;
        }
    }
});
const accounts0 = JSON.parse(localStorage.getItem("accounts"));
for (var i = 0; i < 10; i++) {
    document.getElementById("add").innerHTML += accounts0[i].name + "," + accounts0[i].email + "," + accounts0[i].type + "," + "<hr>";

}
//document.getElementById("add").innerHTML = JSON.stringify(accounts0, null, 4);