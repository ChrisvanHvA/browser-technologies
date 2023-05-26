document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("firstnameresult").innerHTML = localStorage.getItem("firstname");
    document.getElementById("lastnameresult").innerHTML = localStorage.getItem("lastname");
    document.getElementById("emailresult").innerHTML = localStorage.getItem("email");
    document.getElementById("streetnrresult").innerHTML = localStorage.getItem("streetnr");
    document.getElementById("cityresult").innerHTML = localStorage.getItem("city");
    document.getElementById("zipresult").innerHTML = localStorage.getItem("zip");


});   