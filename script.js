const container = document.getElementById("container");
const txtInput = document.getElementById("txtinput");
const btnInput = document.getElementById("btninput");
const picker = document.getElementById("picker")

let canvasSize = 16;
let opacity = 1;

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
};

function inputCanvas() {
    if (txtInput.value === "") {
        alert("Please write something!");
        return;
    }
    let userInput = Number(txtInput.value);
    if (isNaN(userInput)) {
        alert("Please write a number!");
        txtInput.value = "";
    } else if (userInput < 8 || userInput > 100) {
        alert("Please write a number between 8 and 100!");
        txtInput.value = "";
    } else {
        canvasSize = userInput;
        container.innerHTML = "";
        initCanvas();
        txtInput.value = "";
    }
};

function randomRGB() {
    let rgb1 = Math.floor(Math.random() * 255) + 1;
    let rgb2 = Math.floor(Math.random() * 255) + 1;
    let rgb3 = Math.floor(Math.random() * 255) + 1;
    let rgbVal = `rgb(${rgb1}, ${rgb2}, ${rgb3})`
    return rgbVal;
};

container.addEventListener('mouseover', (e) => {
    let mode = document.querySelector("input[name=mode]:checked").value;
    if (mode === "default") {
        e.target.style.backgroundColor = `${picker.value}`;
    } else if (mode === "random") {
        let rgbVal = randomRGB();
        console.log(rgbVal);
        e.target.style.backgroundColor = rgbVal;
    } else {
        e.target.style.backgroundColor = `rgb(0, 0, 0, )`;
    }
});

initCanvas();