const BOUNDARY = 5
const button = document.getElementById("button");
const mouseVec = {
    magX: 0,
    magY: 0,
}
let x, y, prevX, prevY, distX, distY;



window.addEventListener("mousemove", (Event) => {
    btnRect = button.getBoundingClientRect();
    let left =  Math.floor((btnRect.left / 100)* 10)
    let right = Math.floor((btnRect.right / 100)* 10)
    let top = Math.floor((btnRect.top / 100)* 10);
    let bottom = Math.floor((btnRect.bottom / 100)* 10);
    x = Math.floor((Event.clientX / 100) * 10);
    y = Math.floor((Event.clientY / 100) * 10);
    distX = Math.abs(left - x) - BOUNDARY;
    distY = Math.abs(top - y) - BOUNDARY;
    mouseVec.magX = x - prevX;
    mouseVec.magY = y - prevY;
    let newLeft = left + mouseVec.magX;
    let newTop = top + mouseVec.magY;
    let move = checkBounds(left, right, top, bottom);
    if (move) {
        //left
        if (mouseVec.magX < 0){
            button.style.left = `${newLeft}vmin`;
        } else if (mouseVec.magX > 0) {
            button.style.left = `${newLeft + 20}vmin`;
        }
        if (mouseVec.magY < 0) {
            button.style.top = `${newTop}vh`;
        }
        if (mouseVec.magY > 0) {
            button.style.top = `${newTop + 15}vh`;
        }
    }
    prevX = x;
    prevY = y;
});

function checkBounds(l, r, t, b) {
    verticalBounds = (l - x) < BOUNDARY && (x - r) < BOUNDARY;
    horizontalBounds = (t - y) < BOUNDARY && (y - b) < BOUNDARY;
    if (verticalBounds && horizontalBounds) {
        return true;
    } else {
        return false;
    }
}