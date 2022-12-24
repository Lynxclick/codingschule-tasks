/*
let Input = document.querySelector("input").value;
document.querySelectorAll("btn").addEventListener("click", change);

function change() {
    document.querySelector("list-group-item").innerText = text;

    // btn.getElementsByClassName.innerText = "red";
    // text[2].getElementsByClassName.color = "green";
}
*/
const eingabe = document.querySelector("input");

const button = document.querySelector(".btn");

const text = document.querySelector(".list-group-item");


button.addEventListener("click", klick);

function klick() {
    // text.innerHTML = eingabe.value;
    var neuesElement = document.createElement("li");
    neuesElement.innerText = eingabe.value;
    neuesElement.classList.add("list-group-item");
    document.querySelector("ul").appendChild(neuesElement);
}