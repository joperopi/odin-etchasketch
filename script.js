const container = document.getElementById("container");
const txtInput = document.getElementById("txtinput");
const btnInput = document.getElementById("btninput");

let canvasSize = 16;

function initCanvas() {
    let canvasTotal = canvasSize ** 2;
    let pxSize = 800 / canvasSize;
    console.log(pxSize);
    for (let i = 0; i < canvasTotal; i++) {
        let div = document.createElement("div");
        div.style.width = `${pxSize}px`;
        div.style.height = `${pxSize}px`;
        div.style.backgroundColor = `hsl(${i}, 75%, 50%)`;
        container.appendChild(div);
    }
}

container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "black";
});

initCanvas();