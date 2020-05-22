var can1 = document.getElementById("can1");

can1.style.color = "white";
can1.style.height = "200px";
can1.style.width = "300px";
can1.style.position = "fixed";
can1.style.top = "1px";
can1.style.left = "1px";
can1.style.backgroundImage = "url(./img/doga.jpg)";
var isReverseTop = false;
var isReverseLeft = false;
function animate(element, top, left) {
    var topOfElement = parseInt(element.style.top.split("px")[0]);
    if (topOfElement >= (window.innerHeight - parseInt(element.style.height.split("px")))) {
        isReverseTop = true;
    } else if (topOfElement <= 0) {
        isReverseTop = false;
    }
    element.style.top = (top + topOfElement).toString() + "px";

    var leftOfElement = parseInt(element.style.left.split("px")[0]);
    if (leftOfElement >= (window.innerWidth - parseInt(element.style.width.split("px")))) {
        isReverseLeft = true;
    } else if (leftOfElement <= 0) {
        isReverseLeft = false;
    }
    element.style.left = (left + leftOfElement).toString() + "px";
}
var timer = setInterval(function () {
    if (isReverseTop == true && isReverseLeft == true) {
        animate(can1, -1, -1);
    } else if (isReverseTop == false && isReverseLeft == true) {
        animate(can1, 1, -1);
    } else if (isReverseTop == true && isReverseLeft == false) {
        animate(can1, -1, 1);
    } else if (isReverseTop == false && isReverseLeft == false) {
        animate(can1, 1, 1);
    }
}, 1);
