//load our data <- d3.csv
//bind data to html page
//visualize
let testo = []
let markup =[]
let data = d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7dERNK2Ag_cnpk2XJ--E3X0Ufkl4U8KNA4S2VEWq04CUMzpQKkNdPGneiKDl8g82MAgXVLErp2hUI/pub?gid=798730079&single=true&output=csv");

let cardsContainer = d3.select("#visualization-container");
let preventOverlaps = "section";
let fastScrollEnd = 3000;
let contatore = 0;
let valore = 0;


data.then(function(myData) {
// console.log(myData);



let cluster = []


 let card = cardsContainer.selectAll("div")
   .data(myData)
   .join("div")
   .attr("class", function (datum) {
     cluster = datum.CLASSE
     return cluster;
   })

card.append("div")
 .attr("class", "card-header")
 .attr("id", function (datum) {
 markup = datum.ID
     return markup;
 })
.text(function(datum){
 testo = datum.COMMENT;
// let result = testo.replace("PROVA", "<span>PIPPO</span>");
 return testo;
 
});
 /*for (let i = 1; i < 4; i++) {
   let keywords = [/a/g, /in/g, /b/g]
   let change = ["<a class='keyword'>a</a>", "<a class='CLUSTER'>food</a>", "<a class='keyword'>c</a>"]
   let identificatore = i.toString();
   document.getElementById(identificatore).innerHTML = document.getElementById(identificatore).innerHTML.replace(keywords[i-1], change[i-1]);
 }*/
//$("#scrollTriggerFadesectionuno").text($("#scrollTriggerFadesectionuno").text().replace("PROVA", "<p>DONATO</p>"));



 
var pollution = gsap.utils.toArray('.section.POLLUTION');

 pollution.forEach((section) => {
 
 gsap.to(section, { x:"-16.3vw", backgroundColor:"green",
   scrollTrigger: {
    scroller: ".viewportCommenti",
       trigger: section,
       start: 'top top+=65%',   
       end: '+=100',
       markers: false,
       toggleActions: "play none none reverse",
       preventOverlaps: preventOverlaps,
       fastScrollEnd: fastScrollEnd
       
   }
});
 
gsap.to(section, {
      
  onStart: toto, onReverseComplete: totoreverse,
 
   scrollTrigger: {
   scroller: ".viewportCommenti",
   trigger: section,
   start: 'top top+=65%',
   end: '+=100',
   markers: false,
   scrub: true,
   repeat:1,
   fastScrollEnd: fastScrollEnd,
   }  
})

})

function toto() {

contatore = contatore + 0.05;
valore = valore + 1;
document.getElementById("barpoll").style.height = 10 + contatore + "vh";
document.getElementById("counterpoll").innerHTML = valore;
}

function totoreverse() {

contatore = contatore - 0.05;
valore = valore - 1;
document.getElementById("barpoll").style.height = 10 + contatore + "vh";
document.getElementById("counterpoll").innerHTML = valore;

}




var routine = gsap.utils.toArray('.section.ROUTINE');

 routine.forEach((section) => {
 
 
 
 gsap.to(section, { x:"16.3vw", backgroundColor:"red",
   scrollTrigger: {
    scroller: ".viewportCommenti",
       trigger: section,
       start: 'top top+=65%',   
       end: '+=100',
       markers: false,
       toggleActions: "play none none reverse",
       preventOverlaps: preventOverlaps,
       fastScrollEnd: fastScrollEnd
   }
});
 
})


var rich = gsap.utils.toArray('.section.RICH');

 rich.forEach((section) => {
 
 
 
 gsap.to(section, { x:"32.6vw", backgroundColor:"yellow",
   scrollTrigger: {
    scroller: ".viewportCommenti",
       trigger: section,
       start: 'top top+=65%',   
       end: '+=100',
       markers: false,
       toggleActions: "play none none reverse",
       preventOverlaps: preventOverlaps,
       fastScrollEnd: fastScrollEnd
   }
});
 
})

var celebrities = gsap.utils.toArray('.section.CELEBRITIES');

 celebrities.forEach((section) => {
 
 
 
 gsap.to(section, { x:"48.9vw", backgroundColor:"lightblue",
   scrollTrigger: {
    scroller: ".viewportCommenti",
       trigger: section,
       start: 'top top+=65%',   
       end: '+=100',
       markers: false,
       toggleActions: "play none none reverse",
       preventOverlaps: preventOverlaps,
       fastScrollEnd: fastScrollEnd
   }
});
 
})

var everyday = gsap.utils.toArray('.section.EVERYDAY');

 everyday.forEach((section) => {
 
 
 
 gsap.to(section, { x:"65.2vw", backgroundColor:"lightgrey",
   scrollTrigger: {
    scroller: ".viewportCommenti",
       trigger: section,
       start: 'top top+=65%',   
       end: '+=100',
       markers: false,
       toggleActions: "play none none reverse",
       preventOverlaps: preventOverlaps,
       fastScrollEnd: fastScrollEnd
   }
});
 
})

var undefined = gsap.utils.toArray('.section.UNDEFINED');

 undefined.forEach((section) => {
 
 
 
 gsap.to(section, { opacity: 0.5,
   scrollTrigger: {
    scroller: ".viewportCommenti",
       trigger: section,
       start: 'top top+=65%',   
       end: '+=100',
       markers: false,
       toggleActions: "play none none reverse",
       preventOverlaps: preventOverlaps,
       fastScrollEnd: fastScrollEnd
   }
});
 
}) 


});