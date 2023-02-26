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
        //moveBlockLeft();//
        startBall();
    }
    if (e.key === "ArrowRight") {
        moveBlockRight();
    }
});


function startBall() {
    const leftBallNumbers = ball.style.left.replace("px", "");
    const bottomBallNumbers = ball.style.bottom.replace ("px","");
    const leftBall = parseInt(leftBallNumbers, 10);
    const bottomBall = parseInt(bottomBallNumbers, 10);
    if (leftBall > 0) {
        ball.style.left = `${leftBall - 5}px`
        ball.style.bottom = `${bottomBall + 5}px`
    }

}
