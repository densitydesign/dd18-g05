// //modal
// // Get the modal
var ciao = document.getElementById("DivScroll");
var prima = document.getElementById("BeforeScroll");
var back = document.getElementsByTagName("BODY")[0];

// prima.onscroll = function () {
//   ciao.style.transform = "translateY(-86.5vh)";

//   ciao.style.transition = "2s";
// };

// ciao.onmousedown = function () {
//   ciao.style.transform = "translateY(0vh)";

//   ciao.style.transition = "2s";
// };
back.onscroll = function () {
  if (5 < window.scrollY) {
    ciao.style.transform = "translateY(-85vh)";
    ciao.style.pointerEvents = "all";
    ciao.style.transition = "2s";
  } else {
    ciao.style.transform = "translateY(0vh)";
    ciao.style.pointerEvents = "none";
    ciao.style.transition = "2s";
  }
};
