const container = document.getElementById("container");
const txtInput = document.getElementById("txtinput");
const btnInput = document.getElementById("btninput");

let canvasSize = 16;

function initCanvas() {
    let canvasTotal = canvasSize ** 2;
    let pxSize = 800 / canvasSize;
    for (let i = 0; i < canvasTotal; i++) {
        let div = document.createElement("div");
        div.style.width = `${pxSize}px`;
        div.style.height = `${pxSize}px`;
        div.style.backgroundColor = "white";
        container.appendChild(div);
    }
}

function inputCanvas() {
    let userInput = Number(txtInput.value);
    if (isNaN(userInput)) {
        alert("Please write a number!");
        txtInput.value = "";
    } else if (userInput < 8 || userInput > 100) {
        alert("Please write a number between 2 and 100!");
        txtInput.value = "";
    } else {
        canvasSize = userInput;
        container.innerHTML = "";
        initCanvas();
        txtInput.value = "";
    }
}

container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "black";
});

initCanvas();