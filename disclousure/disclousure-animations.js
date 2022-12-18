//first card

var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

first.onmousedown = function () {
  first.style.left = "0.5vw";
  second.style.left = "92vw";
  third.style.left = "96vw";

  first.style.transition = "1s";
  second.style.transition = "1s";
  third.style.transition = "1s";
};

second.onmousedown = function () {
  first.style.left = "0.5vw";
  second.style.left = "4vw";
  third.style.left = "96vw";

  first.style.transition = "1s";
  second.style.transition = "1s";
  third.style.transition = "1s";
};

third.onmousedown = function () {
  first.style.left = "0.5vw";
  second.style.left = "4vw";
  third.style.left = "8vw";

  first.style.transition = "1s";
  second.style.transition = "1s";
  third.style.transition = "1s";
};

first.onmouseover = function () {
  first.style.transform = "translateX(-0.25vw)";

  first.style.transition = "0.4s";
};
first.onmouseout = function () {
  first.style.transform = "translateX(0.25vw)";

  first.style.transition = "0.4s";
};

second.onmouseover = function () {
  second.style.transform = "translateX(-0.25vw)";

  second.style.transition = "0.4s";
};
second.onmouseout = function () {
  second.style.transform = "translateX(0.25vw)";

  second.style.transition = "0.4s";
};

third.onmouseover = function () {
  third.style.transform = "translateX(-0.25vw)";

  third.style.transition = "0.4s";
};
third.onmouseout = function () {
  third.style.transform = "translateX(0.25vw)";

  third.style.transition = "0.4s";
};
