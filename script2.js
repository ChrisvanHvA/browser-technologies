function addColor() {
    var overlay = document.getElementById("overlay");
    var shirtcolor =localStorage.getItem("color");

    overlay.style.backgroundColor = shirtcolor;
    console.log(shirtcolor)

}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("nameresult").innerHTML=localStorage.getItem("textvalue");
    document.getElementById("sizeresult").innerHTML=localStorage.getItem("size");
    document.getElementById("genderresult").innerHTML=localStorage.getItem
    ("gender");

    addColor();
});


function saveInfo() {

    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var streetnr = document.getElementById("streetnr");
    var city = document.getElementById("city");
    var zip = document.getElementById("zip");
  
    localStorage.setItem("firstname", firstname.value);
    localStorage.setItem("lastname", lastname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("streetnr", streetnr.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("zip", zip.value);
}



document.getElementById("submitorder").addEventListener("click", saveInfo);
