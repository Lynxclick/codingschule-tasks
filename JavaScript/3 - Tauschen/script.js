
const red = document.querySelector(".red");
const green = document.querySelector(".green");

[red.innerText, green.innerText] = [green.innerText, red.innerText]

// red.style.backgroundColor = "green";
// green.style.backgroundColor = "red";

// red.textContent = "Green";
// green.textContent = "Red";

// const text = red.innerText;
// red.innerText = green.innerText;
// green.innerText = text;

/* setInterval(farbwechsel, 2000);

function farbwechsel() {
    red.classList.toggle("green");
    red.classList.toggle("red");

    // const text = red.innerText;
    // red.innerText = green.innerText;
    // green.innerText = text;
    [red.innerText, green.innerText] = [green.innerText, red.innerText]

    green.classList.toggle("green");
    green.classList.toggle("red");
}
*/