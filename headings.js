// //modal
// // Get the modal
var ciao = document.getElementById("DivScroll");
var prima = document.getElementById("BeforeScroll");
var back = document.getElementsByTagName("BODY")[0];
var oldScrollY = window.scrollY;
// prima.onscroll = function () {
//   ciao.style.transform = "translateY(-86.5vh)";

//   ciao.style.transition = "2s";
// };

// ciao.onmousedown = function () {
//   ciao.style.transform = "translateY(0vh)";

//   ciao.style.transition = "2s";
// };
window.onscroll = function () {
  if (oldScrollY < window.scrollY) {
    ciao.style.transform = "translateY(-86.5vh)";

    ciao.style.transition = "2s";
  } else {
    ciao.style.transform = "translateY(0vh)";

    ciao.style.transition = "2s";
  }
  oldScrollY = window.scrollY;
};
