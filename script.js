function changeForm() {
    var forminfo = document.getElementById("indexForm");
    forminfo.action = "submitinfo.html"
}
changeForm();

document.getElementById("sendInfo").addEventListener("click", sendvalues);

document.getElementsByName("size").forEach(item => {
    item.addEventListener("change", () => {
        console.log(item.id);
        localStorage.setItem("size", item.id);
    })
})

document.getElementsByName("gender").forEach(item => {
    item.addEventListener("change", () => {
        console.log(item.id);
        localStorage.setItem("gender", item.id);
    })
})

document.getElementsByName("color").forEach(item => {
    item.addEventListener("change", () => {
        console.log(item.id);
        if (item.id === "custom") {

            value = document.getElementById("quantity")
            console.log(value.value);
            localStorage.setItem("color", "#" + value.value);

        } else {

            localStorage.setItem("color", item.id);
        }
    })
})


function sendvalues() {
    var name = document.getElementById("txt").value;
    localStorage.setItem("textvalue", name);
}

function redColor() {
    var overlay = document.getElementById("overlay");
    overlay.style.backgroundColor = "red";
}

function whiteColor() {
    var overlay = document.getElementById("overlay");
    overlay.style.backgroundColor = "white";
}

function customColor() {
    var overlay = document.getElementById("overlay");
    value = document.getElementById("quantity")
    overlay.style.backgroundColor = "#" + value.value;
    console.log(value.value)
}

document.getElementById("red").addEventListener("click", redColor);
document.getElementById("white").addEventListener("click", whiteColor);
document.getElementById("trybutton").addEventListener("click", customColor);