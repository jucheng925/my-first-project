//const h2 = document.createElement("h2");
//h2.textContent = "This content added by JavaScript";
//document.querySelector("body").appendChild(h2);

const block = document.getElementById("block");
function moveBlockLeft() {
    const leftNumbers = block.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      block.style.left = `${left - 5}px`;
    }
  }

function moveBlockRight() {
    const leftNumbers = block.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 420) {
        block.style.left = `${left + 5}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveBlockLeft();
    }
    if (e.key === "ArrowRight") {
        moveBlockRight();
    }
});
