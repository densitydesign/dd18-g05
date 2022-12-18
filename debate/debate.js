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

var pollution = gsap.utils.toArray(".section.POLLUTION");

pollution.forEach((section) => {
  gsap.to(section, {
    x: "-16.3vw",
    scrollTrigger: {
      scroller: ".viewportCommenti",
      trigger: section,
      start: "top top+=65%",
      end: "+=100",
      markers: false,
      toggleActions: "play none none reverse",
      preventOverlaps: preventOverlaps,
      fastScrollEnd: fastScrollEnd,
    },
  });

  gsap.to(section, {
    onStart: toto,
    onReverseComplete: totoreverse,

    scrollTrigger: {
      scroller: ".viewportCommenti",
      trigger: section,
      start: "top top+=65%",
      end: "+=100",
      markers: false,
      scrub: true,
      repeat: 1,
      fastScrollEnd: fastScrollEnd,
    },
  });

  function toto() {
    contatorePollution = contatorePollution + 0.05;
    valorePollution = valorePollution + 1;
    document.getElementById("barpoll").style.height =
      7 + contatorePollution + "vh";
    document.getElementById("counterpoll").innerHTML = valorePollution;
  }

  function totoreverse() {
    contatorePollution = contatorePollution - 0.05;
    valorePollution = valorePollution - 1;
    document.getElementById("barpoll").style.height =
      7 + contatorePollution + "vh";
    document.getElementById("counterpoll").innerHTML = valorePollution;
  }
});

var routine = gsap.utils.toArray(".section.ROUTINE");

routine.forEach((section) => {
  gsap.to(section, {
    x: "16.3vw",
    scrollTrigger: {
      scroller: ".viewportCommenti",
      trigger: section,
      start: "top top+=65%",
      end: "+=100",
      markers: false,
      toggleActions: "play none none reverse",
      preventOverlaps: preventOverlaps,
      fastScrollEnd: fastScrollEnd,
    },
  });

  gsap.to(section, {
    onStart: toto,
    onReverseComplete: totoreverse,

    scrollTrigger: {
      scroller: ".viewportCommenti",
      trigger: section,
      start: "top top+=65%",
      end: "+=100",
      markers: false,
      scrub: true,
      repeat: 1,
      fastScrollEnd: fastScrollEnd,
    },
  });

  function toto() {
    contatoreRoutine = contatoreRoutine + 0.05;
    valoreRoutine = valoreRoutine + 1;
    document.getElementById("barrout").style.height =
      7 + contatoreRoutine + "vh";
    document.getElementById("counterrout").innerHTML = valoreRoutine;

    // CAMBIO BOTTONI

    if (valoreRoutine >= "304") {
      document.getElementById("skipbutton").innerHTML = "go to dataset";

      document.getElementById("goarch").href = "./archive.html";
      document.getElementById("BottoneTop").style.display = "block";
    } else {
      document.getElementById("skipbutton").innerHTML = "Skip All";
      document.getElementById("goarch").href = "#4483";
    }

    if (valoreRoutine < "304") {
      document.getElementById("goarch").href = "#4483";
      document.getElementById("BottoneTop").style.display = "none";
    }
  }

  function totoreverse() {
    contatoreRoutine = contatoreRoutine - 0.05;
    valoreRoutine = valoreRoutine - 1;
    document.getElementById("barrout").style.height =
      7 + contatoreRoutine + "vh";
    document.getElementById("counterrout").innerHTML = valoreRoutine;
    //CAMBIO BOTTONI
    if (valoreRoutine >= "304") {
      document.getElementById("skipbutton").innerHTML = "go to dataset";
      document.getElementById("goarch").href = "./archive.html";
      document.getElementById("BottoneTop").style.display = "block";
    } else {
      document.getElementById("goarch").href = "#4483";
      document.getElementById("skipbutton").innerHTML = "Skip All";
    }

    if (valoreRoutine < "304") {
      document.getElementById("goarch").href = "#4483";
      document.getElementById("BottoneTop").style.display = "none";
    }
  }

  // Cambio bottoni arrivati alla fine

  // function changebutton() {
  //console.log("ciaoooo");
  //let buttonswitch = document.getElementById("counterrout").innerHTML;
  // if (buttonswitch == "304") {
  //  document.getElementById("skipbutton").innerHTML = "Explore!";
  // }
  // }
});

var rich = gsap.utils.toArray(".section.RICH");

rich.forEach((section) => {
  gsap.to(section, {
    x: "32.6vw",
    scrollTrigger: {
      scroller: ".viewportCommenti",
      trigger: section,
      start: "top top+=65%",
      end: "+=100",
      markers: false,
      toggleActions: "play none none reverse",
      preventOverlaps: preventOverlaps,
      fastScrollEnd: fastScrollEnd,
    },
  });

  gsap.to(section, {
    onStart: toto,
    onReverseComplete: totoreverse,

    scrollTrigger: {
      scroller: ".viewportCommenti",
      trigger: section,
      start: "top top+=65%",
      end: "+=100",
      markers: false,
      scrub: true,
      repeat: 1,
      fastScrollEnd: fastScrollEnd,
    },
  });

  function toto() {
    contatoreRich = contatoreRich + 0.05;
    valoreRich = valoreRich + 1;
    document.getElementById("barrich").style.height = 7 + contatoreRich + "vh";
    document.getElementById("counterrich").innerHTML = valoreRich;

    //CAMBIO VIDEO

    if (valoreRich == 0) {
      document.getElementById("v1").src = "./assets/video/1_Pixel.mp4";
    }
    if (valoreRich == 620) {
      document.getElementById("v1").src = "./assets/video/2_Pixel.mp4";
    }
    if (valoreRich == 624) {
      document.getElementById("v1").src = "./assets/video/3_Pixel.mp4";
    }
    if (valoreRich == 628) {
      document.getElementById("v1").src = "./assets/video/4_Pixel.mp4";
    }
    if (valoreRich == 666) {
      document.getElementById("v1").src = "./assets/video/5_Pixel.mp4";
    }
    if (valoreRich == 668) {
      document.getElementById("v1").src = "./assets/video/6_Pixel.mp4";
    }
    if (valoreRich == 771) {
      document.getElementById("v1").src = "./assets/video/7_Pixel.mp4";
    }
    if (valoreRich == 838) {
      document.getElementById("v1").src = "./assets/video/8_Pixel.mp4";
    }
    if (valoreRich == 856) {
      document.getElementById("v1").src = "./assets/video/9_Pixel.mp4";
    }
    if (valoreRich == 864) {
      document.getElementById("v1").src = "./assets/video/10_Pixel.mp4";
    }
    if (valoreRich == 1069) {
      document.getElementById("v1").src = "./assets/video/11_Pixel.mp4";
    }
    if (valoreRich == 1072) {
      document.getElementById("v1").src = "./assets/video/12_Pixel.mp4";
    }
    if (valoreRich == 1074) {
      document.getElementById("v1").src = "./assets/video/14_Pixel.mp4";
    }
    if (valoreRich == 1076) {
      document.getElementById("v1").src = "./assets/video/15_Pixel.mp4";
    }
    if (valoreRich == 1078) {
      document.getElementById("v1").src = "./assets/video/16_Pixel.mp4";
    }
    if (valoreRich == 1080) {
      document.getElementById("v1").src = "./assets/video/17_Pixel.mp4";
    }
    if (valoreRich == 1082) {
      document.getElementById("v1").src = "./assets/video/18_Pixel.mp4";
    }
    if (valoreRich == 1085) {
      document.getElementById("v1").src = "./assets/video/19_Pixel.mp4";
    }
  }

  function totoreverse() {
    contatoreRich = contatoreRich - 0.05;
    valoreRich = valoreRich - 1;
    document.getElementById("barrich").style.height = 7 + contatoreRich + "vh";
    document.getElementById("counterrich").innerHTML = valoreRich;

    //CAMBIO VIDEO

    if (valoreRich == 619) {
      document.getElementById("v1").src = "./assets/video/1_Pixel.mp4";
    }
    if (valoreRich == 623) {
      document.getElementById("v1").src = "./assets/video/2_Pixel.mp4";
    }
    if (valoreRich == 627) {
      document.getElementById("v1").src = "./assets/video/3_Pixel.mp4";
    }
    if (valoreRich == 665) {
      document.getElementById("v1").src = "./assets/video/4_Pixel.mp4";
    }
    if (valoreRich == 667) {
      document.getElementById("v1").src = "./assets/video/5_Pixel.mp4";
    }
    if (valoreRich == 770) {
      document.getElementById("v1").src = "./assets/video/6_Pixel.mp4";
    }
    if (valoreRich == 837) {
      document.getElementById("v1").src = "./assets/video/7_Pixel.mp4";
    }
    if (valoreRich == 855) {
      document.getElementById("v1").src = "./assets/video/8_Pixel.mp4";
    }
    if (valoreRich == 863) {
      document.getElementById("v1").src = "./assets/video/9_Pixel.mp4";
    }
    if (valoreRich == 1068) {
      document.getElementById("v1").src = "./assets/video/10_Pixel.mp4";
    }
    if (valoreRich == 1071) {
      document.getElementById("v1").src = "./assets/video/11_Pixel.mp4";
    }
    if (valoreRich == 1073) {
      document.getElementById("v1").src = "./assets/video/12_Pixel.mp4";
    }
    if (valoreRich == 1075) {
      document.getElementById("v1").src = "./assets/video/14_Pixel.mp4";
    }
    if (valoreRich == 1077) {
      document.getElementById("v1").src = "./assets/video/15_Pixel.mp4";
    }
    if (valoreRich == 1079) {
      document.getElementById("v1").src = "./assets/video/16_Pixel.mp4";
    }
    if (valoreRich == 1081) {
      document.getElementById("v1").src = "./assets/video/17_Pixel.mp4";
    }
    if (valoreRich == 1084) {
      document.getElementById("v1").src = "./assets/video/18_Pixel.mp4";
    }
  }
});

var celebrities = gsap.utils.toArray(".section.CELEBRITIES");

celebrities.forEach((section) => {
  gsap.to(section, {
    x: "48.9vw",
    scrollTrigger: {
      scroller: ".viewportCommenti",
      trigger: section,
      start: "top top+=65%",
      end: "+=100",
      markers: false,
      toggleActions: "play none none reverse",
      preventOverlaps: preventOverlaps,
      fastScrollEnd: fastScrollEnd,
    },
  });

  gsap.to(section, {
    onStart: toto,
    onReverseComplete: totoreverse,

    scrollTrigger: {
      scroller: ".viewportCommenti",
      trigger: section,
      start: "top top+=65%",
      end: "+=100",
      markers: false,
      scrub: true,
      repeat: 1,
      fastScrollEnd: fastScrollEnd,
    },
  });

  function toto() {
    contatoreCelebrities = contatoreCelebrities + 0.05;
    valoreCelebrities = valoreCelebrities + 1;
    document.getElementById("barcele").style.height =
      7 + contatoreCelebrities + "vh";
    document.getElementById("countercele").innerHTML = valoreCelebrities;
  }

  function totoreverse() {
    contatoreCelebrities = contatoreCelebrities - 0.05;
    valoreCelebrities = valoreCelebrities - 1;
    document.getElementById("barcele").style.height =
      7 + contatoreCelebrities + "vh";
    document.getElementById("countercele").innerHTML = valoreCelebrities;
  }
});

var everyday = gsap.utils.toArray(".section.EVERYDAY");

everyday.forEach((section) => {
  gsap.to(section, {
    x: "65.2vw",
    scrollTrigger: {
      scroller: ".viewportCommenti",
      trigger: section,
      start: "top top+=65%",
      end: "+=100",
      markers: false,
      toggleActions: "play none none reverse",
      preventOverlaps: preventOverlaps,
      fastScrollEnd: fastScrollEnd,
    },
  });

  gsap.to(section, {
    onStart: toto,
    onReverseComplete: totoreverse,

    scrollTrigger: {
      scroller: ".viewportCommenti",
      trigger: section,
      start: "top top+=65%",
      end: "+=100",
      markers: false,
      scrub: true,
      repeat: 1,
      fastScrollEnd: fastScrollEnd,
    },
  });

  function toto() {
    contatoreEveryday = contatoreEveryday + 0.05;
    valoreEveryday = valoreEveryday + 1;
    document.getElementById("barever").style.height =
      7 + contatoreEveryday + "vh";
    document.getElementById("counterever").innerHTML = valoreEveryday;
  }

  function totoreverse() {
    contatoreEveryday = contatoreEveryday - 0.05;
    valoreEveryday = valoreEveryday - 1;
    document.getElementById("barever").style.height =
      7 + contatoreEveryday + "vh";
    document.getElementById("counterever").innerHTML = valoreEveryday;
  }
});

var nondefinito = gsap.utils.toArray(".section.NONDEF");

nondefinito.forEach((section) => {
  gsap.to(section, {
    opacity: 0.5,
    scrollTrigger: {
      scroller: ".viewportCommenti",
      trigger: section,
      start: "top top+=40%",
      end: "+=100",
      markers: false,
      toggleActions: "play none none reverse",
      preventOverlaps: preventOverlaps,
      fastScrollEnd: fastScrollEnd,
    },
  });
});

//FUNZIONE BOTTONI
const buttons = document.getElementsByTagName("button");

const buttonPressed = (e) => {
  let idclick = e.target.id;

  for (let i = 1; i < 4484; i++) {
    let idstring = i.toString();
    //var ident = document.getElementById(idstring);

    var compare = document
      .getElementById(idstring)
      .getElementsByTagName("span");

    let displaycheck = 0;
    //console.log(compare[0]);
    // console.log(idclick);
    for (let j = 0; j < compare.length; j++) {
      if (compare[j].id == idclick) {
        displaycheck = 1;

        //  document.getElementById(idstring).style.display = "none";

        //  } else { displaycheck = 1; }
      }
    }
    if (displaycheck != 1) {
      document.getElementById(idstring).style.display = "none";
    }
  }
};

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

// script popup

// Pollution
$("#titpol").click(function () {
  $("#contenitorepop").css({
    display: "block",
  });
  $("#poppollution").css({
    display: "block",
  });
  $("#poproutine").css({
    display: "none",
  });
  $("#poprichness").css({
    display: "none",
  });
  $("#popcelebrities").css({
    display: "none",
  });
  $("#popeveryday").css({
    display: "none",
  });
});

$("#closepol").click(function () {
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
  $("#poppollution").css({
    display: "none",
  });
  $("#poproutine").css({
    display: "block",
  });
  $("#poprichness").css({
    display: "none",
  });
  $("#popcelebrities").css({
    display: "none",
  });
  $("#popeveryday").css({
    display: "none",
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
  $("#poppollution").css({
    display: "none",
  });
  $("#poproutine").css({
    display: "none",
  });
  $("#poprichness").css({
    display: "block",
  });
  $("#popcelebrities").css({
    display: "none",
  });
  $("#popeveryday").css({
    display: "none",
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
  $("#poppollution").css({
    display: "none",
  });
  $("#poproutine").css({
    display: "none",
  });
  $("#poprichness").css({
    display: "none",
  });
  $("#popcelebrities").css({
    display: "block",
  });
  $("#popeveryday").css({
    display: "none",
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
  $("#poppollution").css({
    display: "none",
  });
  $("#poproutine").css({
    display: "none",
  });
  $("#poprichness").css({
    display: "none",
  });
  $("#popcelebrities").css({
    display: "none",
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
