const BOUNDARY = 30
const button = document.getElementById("button");
const mouseVec = {
    magX: 0,
    magY: 0,
}
let x, y, prevX, prevY;



window.addEventListener("mousemove", (Event) => {
    btnRect = button.getBoundingClientRect();
    let left =  btnRect.left
    let right = btnRect.right
    let top = btnRect.top;
    let bottom = btnRect.bottom;
    x = Event.clientX;
    y = Event.clientY;
    
    mouseVec.magX = x - prevX;
    mouseVec.magY = y - prevY;
    
    let newLeft = left + mouseVec.magX;
    let newTop = top + mouseVec.magY;
    let move = checkBounds(left, right, top, bottom);
    
    if (move) {
        if (mouseVec.magX < 0){
            button.style.left = `${newLeft}px`;
        } else if (mouseVec.magX > 0) {
            button.style.left = `${newLeft}px`;
        }
        if (mouseVec.magY < 0) {
            button.style.top = `${newTop}px`;
        }
        if (mouseVec.magY > 0) {
            button.style.top = `${newTop}px`;
        }
    }
    prevX = x;
    prevY = y;
});

function checkBounds(l, r, t, b) {

    //grouped for readability
    verticalBounds = (l - x) < BOUNDARY && (x - r) < BOUNDARY;
    horizontalBounds = (t - y) < BOUNDARY && (y - b) < BOUNDARY;

    if (verticalBounds && horizontalBounds) {
        return true;
    } else {
        return false;
    }
}
