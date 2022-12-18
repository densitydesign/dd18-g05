// //modal
// // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("logo-jet");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onmouseover = function () {
  modal.style.left = "0vw";
  modal.style.display = "block";
  modal.style.transition = "0.4s";
};
modal.onmouseover = function () {
  modal.style.left = "0vw";
  modal.style.display = "block";
};

modal.onmouseout = function () {
  modal.style.left = "-35vw";
  modal.style.transition = "0.4s";
};

btn.onmouseout = function () {
  modal.style.left = "-35vw";
  modal.style.transition = "0.4s";
};
