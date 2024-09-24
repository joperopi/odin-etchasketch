const container = document.getElementById("container");

let canvasSize = 20;

function initCanvas() {
    let canvasTotal = canvasSize ** 2;
    let pxSize = 800 / canvasSize;
    console.log(pxSize);
    for (let i = 0; i < canvasTotal; i++) {
        let div = document.createElement("div");
        div.style.width = `${pxSize}px`;
        div.style.height = `${pxSize}px`;
        div.style.backgroundColor = `hsl(${i}, 100%, 50%)`;
        container.appendChild(div);
    }
}

initCanvas();