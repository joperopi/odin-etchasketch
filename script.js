const container = document.getElementById("container");
const txtInput = document.getElementById("txtinput");
const btnInput = document.getElementById("btninput");
const picker = document.getElementById("picker")

let canvasSize = 16; // initial canvas size
let opacity = 0; // initial opacity
let opacityMode = "up"; // this is used by getOpacity to decide the opacity

function initCanvas() { // creates canvas based on canvasSize and the fixed 800px size of the container
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

function inputCanvas() { // this checks if user input is valid and uses it to create a new canvas
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

function clearCanvas() {
    for (const child of container.children) {
        child.style.backgroundColor = "white";
    }
}

function randomRGB() {
    let rgb1 = Math.floor(Math.random() * 255) + 1;
    let rgb2 = Math.floor(Math.random() * 255) + 1;
    let rgb3 = Math.floor(Math.random() * 255) + 1;
    let rgbVal = `rgb(${rgb1}, ${rgb2}, ${rgb3})`
    return rgbVal;
};

function getOpacity() { // this sets the opacity and chooses wether the next square should be more or less opaque
    if (opacity === 0 && opacityMode === "down") {
        let rgbaVal = `0.${opacity}`;
        opacity++;
        opacityMode = "up"
        return rgbaVal;
    }else if (opacity < 10) {

        if (opacityMode === "up"){
            let rgbaVal = `0.${opacity}`;
            opacity++;
            return rgbaVal;
        }else {
            let rgbaVal = `0.${opacity}`;
            opacity--;
            return rgbaVal;
        }
    }else if (opacity === 10) {
        let rgbaVal = `1.0`;
        opacityMode = "down";
        opacity--;
        return rgbaVal;
    }
    
};

container.addEventListener('mouseover', (e) => { // this paints the canvas with the selected mode
    let mode = document.querySelector("input[name=mode]:checked").value;
    if (mode === "default") {
        e.target.style.backgroundColor = `${picker.value}`;
    } else if (mode === "random") {
        let rgbVal = randomRGB();
        e.target.style.backgroundColor = rgbVal;
    } else {
        let rgbaVal = getOpacity();
        e.target.style.backgroundColor = `rgb(0, 0, 0, ${rgbaVal})`;
    }
});

initCanvas(); //generate initial 16x16 canvas