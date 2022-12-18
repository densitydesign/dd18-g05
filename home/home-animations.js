var kylie = document.getElementById("kylie");
var kyliespan = document.getElementById("kyliespan");

kyliespan.onmouseover = function () {
  kylie.style.display = "block";
};

kyliespan.onmouseout = function () {
  kylie.style.display = "none";
};

var keywordButt = document.getElementById("keywordButton");

// Get the button that opens the modal
var keywords = document.getElementById("keywords");

// Get the <span> element that closes the modal

// When the user clicks the button, open the modal

keywordButt.onmouseover = function () {
  keywords.style.display = "block";
};

keywordButt.onmouseout = function () {
  keywords.style.display = "none";
};
