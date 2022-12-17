let testo = [];
let markup = [];

let preventOverlaps = "section";
let fastScrollEnd = 3000;
let contatorePollution = 0;
let valorePollution = 0;
let contatoreRoutine = 0;
let valoreRoutine = 0;
let contatoreRich = 0;
let valoreRich = 0;
let contatoreCelebrities = 0;
let valoreCelebrities = 0;
let contatoreEveryday = 0;
let valoreEveryday = 0;

// FILTRO RESET

$("#resetpol").click(function () {
  $(".pollutionfilter").css({
    filter: "invert(0)",
  });
  $(".polcom").css({
    display: "block",
  });
  $(".undcom").css({
    display: "block",
  });
});

$("#resetrou").click(function () {
  $(".routinefilter").css({
    filter: "invert(0)",
  });
  $(".roucom").css({
    display: "block",
  });
  $(".undcom").css({
    display: "block",
  });
});

$("#resetric").click(function () {
  $(".richnessfilter").css({
    filter: "invert(0)",
  });
  $(".riccom").css({
    display: "block",
  });
  $(".undcom").css({
    display: "block",
  });
});

$("#resetcel").click(function () {
  $(".celebritiesfilter").css({
    filter: "invert(0)",
  });
  $(".celcom").css({
    display: "block",
  });
  $(".undcom").css({
    display: "block",
  });
});

$("#reseteve").click(function () {
  $(".everydayfilter").css({
    filter: "invert(0)",
  });
  $(".evecom").css({
    display: "block",
  });
  $(".undcom").css({
    display: "block",
  });
});

//FILTRI BOTTONI

// Pollution filter

const buttonspoll = document.getElementsByClassName("pollutionfilter");

const buttonPressedpoll = (e) => {
  let idclick = e.target.id;
  let arreypoll = document.getElementsByClassName("pollutionfilter");
  for (var i = 0; i < arreypoll.length; i++) {
    arreypoll[i].style.filter = "invert(0)";
  }

  document.getElementById(idclick).style.filter = "invert(1)";

  for (let i = 1; i < 4484; i++) {
    let idstring = i.toString();
    if (
      document
        .getElementById(idstring)
        .className.match(/(?:^|\s)polcom(?!\S)/) ||
      document.getElementById(idstring).className.match(/(?:^|\s)undcom(?!\S)/)
    ) {
      document.getElementById(idstring).style.display = "block";
    }
  }

  for (let i = 1; i < 4484; i++) {
    let idstring = i.toString();
    let compare = document
      .getElementById(idstring)
      .getElementsByTagName("span");
    let displaycheck = 0;
    for (let j = 0; j < compare.length; j++) {
      if (compare[j].id == idclick) {
        displaycheck = 1;
      }
    }
    if (
      document
        .getElementById(idstring)
        .className.match(/(?:^|\s)polcom(?!\S)/) ||
      document.getElementById(idstring).className.match(/(?:^|\s)undcom(?!\S)/)
    ) {
      if (displaycheck != 1) {
        document.getElementById(idstring).style.display = "none";
      }
    }
  }
};

for (let buttonpoll of buttonspoll) {
  buttonpoll.addEventListener("click", buttonPressedpoll);
}

// Filtro routine

const buttonsrout = document.getElementsByClassName("routinefilter");

const buttonPressedrout = (e) => {
  let idclick = e.target.id;

  let arreyrout = document.getElementsByClassName("routinefilter");
  for (var i = 0; i < arreyrout.length; i++) {
    arreyrout[i].style.filter = "invert(0)";

    if (arreyrout[i].id == idclick) {
      console.log(arreyrout[i]);
      console.log(idclick);
      arreyrout[i].style.filter = "invert(1)";
    }
  }

  for (let i = 1; i < 4484; i++) {
    let idstring = i.toString();
    if (
      document
        .getElementById(idstring)
        .className.match(/(?:^|\s)roucom(?!\S)/) ||
      document.getElementById(idstring).className.match(/(?:^|\s)undcom(?!\S)/)
    ) {
      document.getElementById(idstring).style.display = "block";
    }
  }

  for (let i = 1; i < 4484; i++) {
    let idstring = i.toString();
    let compare = document
      .getElementById(idstring)
      .getElementsByTagName("span");

    let displaycheck = 0;

    for (let j = 0; j < compare.length; j++) {
      if (idclick == compare[j].id) {
        displaycheck = 1;
      }
    }
    if (
      document
        .getElementById(idstring)
        .className.match(/(?:^|\s)roucom(?!\S)/) ||
      document.getElementById(idstring).className.match(/(?:^|\s)undcom(?!\S)/)
    ) {
      if (displaycheck != 1) {
        document.getElementById(idstring).style.display = "none";
      }
    }
  }
};
for (let buttonrout of buttonsrout) {
  buttonrout.addEventListener("click", buttonPressedrout);
}

// Filtro richness

const buttonsric = document.getElementsByClassName("richnessfilter");

const buttonPressedric = (e) => {
  let idclick = e.target.id;

  let arreyric = document.getElementsByClassName("richnessfilter");
  for (var i = 0; i < arreyric.length; i++) {
    arreyric[i].style.filter = "invert(0)";

    if (arreyric[i].id == idclick) {
      console.log(arreyric[i]);
      console.log(idclick);
      arreyric[i].style.filter = "invert(1)";
    }
  }

  for (let i = 1; i < 4484; i++) {
    let idstring = i.toString();
    if (
      document
        .getElementById(idstring)
        .className.match(/(?:^|\s)riccom(?!\S)/) ||
      document.getElementById(idstring).className.match(/(?:^|\s)undcom(?!\S)/)
    ) {
      document.getElementById(idstring).style.display = "block";
    }
  }

  for (let i = 1; i < 4484; i++) {
    let idstring = i.toString();
    let compare = document
      .getElementById(idstring)
      .getElementsByTagName("span");

    let displaycheck = 0;

    for (let j = 0; j < compare.length; j++) {
      if (idclick == compare[j].id) {
        displaycheck = 1;
      }
    }
    if (
      document
        .getElementById(idstring)
        .className.match(/(?:^|\s)riccom(?!\S)/) ||
      document.getElementById(idstring).className.match(/(?:^|\s)undcom(?!\S)/)
    ) {
      if (displaycheck != 1) {
        document.getElementById(idstring).style.display = "none";
      }
    }
  }
};
for (let buttonric of buttonsric) {
  buttonric.addEventListener("click", buttonPressedric);
}

// Filtro celebrities

const buttonscel = document.getElementsByClassName("celebritiesfilter");

const buttonPressedcel = (e) => {
  let idclick = e.target.id;

  let arreycel = document.getElementsByClassName("celebritiesfilter");
  for (var i = 0; i < arreycel.length; i++) {
    arreycel[i].style.filter = "invert(0)";

    if (arreycel[i].id == idclick) {
      console.log(arreycel[i]);
      console.log(idclick);
      arreycel[i].style.filter = "invert(1)";
    }
  }

  for (let i = 1; i < 4484; i++) {
    let idstring = i.toString();
    if (
      document
        .getElementById(idstring)
        .className.match(/(?:^|\s)celcom(?!\S)/) ||
      document.getElementById(idstring).className.match(/(?:^|\s)undcom(?!\S)/)
    ) {
      document.getElementById(idstring).style.display = "block";
    }
  }

  for (let i = 1; i < 4484; i++) {
    let idstring = i.toString();
    let compare = document
      .getElementById(idstring)
      .getElementsByTagName("span");

    let displaycheck = 0;

    for (let j = 0; j < compare.length; j++) {
      if (idclick == compare[j].id) {
        displaycheck = 1;
      }
    }
    if (
      document
        .getElementById(idstring)
        .className.match(/(?:^|\s)celcom(?!\S)/) ||
      document.getElementById(idstring).className.match(/(?:^|\s)undcom(?!\S)/)
    ) {
      if (displaycheck != 1) {
        document.getElementById(idstring).style.display = "none";
      }
    }
  }
};
for (let buttoncel of buttonscel) {
  buttoncel.addEventListener("click", buttonPressedcel);
}

// Filtro everyday

const buttonseve = document.getElementsByClassName("everydayfilter");

const buttonPressedeve = (e) => {
  let idclick = e.target.id;

  let arreyeve = document.getElementsByClassName("everydayfilter");
  for (var i = 0; i < arreyeve.length; i++) {
    arreyeve[i].style.filter = "invert(0)";

    if (arreyeve[i].id == idclick) {
      console.log(arreyeve[i]);
      console.log(idclick);
      arreyeve[i].style.filter = "invert(1)";
    }
  }

  for (let i = 1; i < 4484; i++) {
    let idstring = i.toString();
    if (
      document
        .getElementById(idstring)
        .className.match(/(?:^|\s)evecom(?!\S)/) ||
      document.getElementById(idstring).className.match(/(?:^|\s)undcom(?!\S)/)
    ) {
      document.getElementById(idstring).style.display = "block";
    }
  }

  for (let i = 1; i < 4484; i++) {
    let idstring = i.toString();
    let compare = document
      .getElementById(idstring)
      .getElementsByTagName("span");

    let displaycheck = 0;

    for (let j = 0; j < compare.length; j++) {
      if (idclick == compare[j].id) {
        displaycheck = 1;
      }
    }
    if (
      document
        .getElementById(idstring)
        .className.match(/(?:^|\s)evecom(?!\S)/) ||
      document.getElementById(idstring).className.match(/(?:^|\s)undcom(?!\S)/)
    ) {
      if (displaycheck != 1) {
        document.getElementById(idstring).style.display = "none";
      }
    }
  }
};
for (let buttoneve of buttonseve) {
  buttoneve.addEventListener("click", buttonPressedeve);
}

// script popup

// Pollution
$("#titpol").click(function () {
  console.log("okbro");
  $("#contenitorepop").css({
    display: "block",
  });
  $("#poppollution").css({
    display: "block",
  });
});

$("#closepol").click(function () {
  console.log("okbro");
  $("#contenitorepop").css({
    display: "none",
  });
  $("#poppollution").css({
    display: "none",
  });
});

// Routine
$("#titrou").click(function () {
  $("#contenitorepop").css({
    display: "block",
  });
  $("#poproutine").css({
    display: "block",
  });
});

$("#closerou").click(function () {
  $("#contenitorepop").css({
    display: "none",
  });
  $("#poproutine").css({
    display: "none",
  });
});

// Richness
$("#titric").click(function () {
  $("#contenitorepop").css({
    display: "block",
  });
  $("#poprichness").css({
    display: "block",
  });
});

$("#closeric").click(function () {
  $("#contenitorepop").css({
    display: "none",
  });
  $("#poprichness").css({
    display: "none",
  });
});

// Celebrities
$("#titcel").click(function () {
  $("#contenitorepop").css({
    display: "block",
  });
  $("#popcelebrities").css({
    display: "block",
  });
});

$("#closecel").click(function () {
  $("#contenitorepop").css({
    display: "none",
  });
  $("#popcelebrities").css({
    display: "none",
  });
});

// Everyday
$("#titeve").click(function () {
  $("#contenitorepop").css({
    display: "block",
  });
  $("#popeveryday").css({
    display: "block",
  });
});

$("#closeeve").click(function () {
  $("#contenitorepop").css({
    display: "none",
  });
  $("#popeveryday").css({
    display: "none",
  });
});
// });
