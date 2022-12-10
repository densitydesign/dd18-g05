//load our data <- d3.csv
//bind data to html page
//visualize
let testo = []
let markup =[]
// let data = d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7dERNK2Ag_cnpk2XJ--E3X0Ufkl4U8KNA4S2VEWq04CUMzpQKkNdPGneiKDl8g82MAgXVLErp2hUI/pub?gid=798730079&single=true&output=csv");
let data = d3.csv("/assets/dataset.csv");


let cardsContainer = d3.select("#visualization-container");
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


data.then(function(myData) {

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
 return testo;
});


let keywords = [/\b(aircraft)\b/gi, /\b(airplane)\b/gi, /\b(airplanes)\b/gi, /\b(airport)\b/gi, /\b(airports)\b/gi, /\b(animals)\b/gi,
    /\b(atmosphere)\b/gi, /\b(aviation)\b/gi, /\b(bag)\b/gi, /\b(ban)\b/gi, /\b(beach)\b/gi, /\b(bike)\b/gi, /\b(millionaires)\b/gi,
    /\b(billionaire)\b/gi, /\b(billionaires)\b/gi, /\b(bottle)\b/gi, /\b(boycott)\b/gi, /\b(brands)\b/gi, /\b(bryant)\b/gi, /\b(bus)\b/gi,
    /\b(business)\b/gi, /\b(ca)\b/gi, /\b(california)\b/gi, /\b(cam)\b/gi, /\b(camarillo)\b/gi, /\b(cans)\b/gi, /\b(capitalism)\b/gi,
    /\b(car)\b/gi, /\b(cars)\b/gi, /\b(carbon)\b/gi, /\b(celeb)\b/gi, /\b(celebrities)\b/gi, /\b(celebrity)\b/gi, /\b(celebs)\b/gi,
    /\b(change)\b/gi, /\b(charter)\b/gi, /\b(chickpeas)\b/gi, /\b(china)\b/gi, /\b(elite)\b/gi, /\b(climate)\b/gi, /\b(company)\b/gi,
    /\b(companies)\b/gi, /\b(consequences)\b/gi, /\b(consumption)\b/gi, /\b(corporations)\b/gi, /\b(cosmetics)\b/gi, /\b(makeup)\b/gi,
    /\b(culture)\b/gi, /\b(damage)\b/gi, /\b(dicaprio)\b/gi, /\b(leo)\b/gi, /\b(leonardo)\b/gi, /\b(drake)\b/gi, /\b(drakes)\b/gi, /\b(drive)\b/gi,
    /\b(driving)\b/gi, /\b(drought)\b/gi, /\b(eat)\b/gi, /\b(electric)\b/gi, /\b(elon)\b/gi, /\b(emissions)\b/gi, /\b(enviromental)\b/gi, /\b(enviroment)\b/gi,
    /\b(europe)\b/gi, /\b(fan)\b/gi, /\b(fans)\b/gi, /\b(fault)\b/gi, /\b(fire)\b/gi, /\b(fires)\b/gi, /\b(floyd)\b/gi, /\b(fly)\b/gi, /\b(flying)\b/gi,
    /\b(flight)\b/gi, /\b(food)\b/gi, /\b(footprint)\b/gi, /\b(france)\b/gi, /\b(fuel)\b/gi, /\b(garbage)\b/gi, /\b(gas)\b/gi, /\b(government)\b/gi,
    /\b(green)\b/gi, /\b(hamilton)\b/gi, /\b(hangar)\b/gi, /\b(hanger)\b/gi, /\b(heat)\b/gi, /\b(helicopters)\b/gi, /\b(henderson)\b/gi, /\b(hills)\b/gi,
    /\b(hollywood)\b/gi, /\b(hour)\b/gi, /\b(hours)\b/gi, /\b(hypocrites)\b/gi, /\b(ig)\b/gi, /\b(impact)\b/gi, /\b(india)\b/gi, /\b(industry)\b/gi,
    /\b(jack)\b/gi, /\b(jets)\b/gi, /\b(joke)\b/gi, /\b(kardashian)\b/gi, /\b(kardashians)\b/gi, /\b(kim)\b/gi, /\b(kimkardashian)\b/gi, /\b(kourtney)\b/gi,
    /\b(kenny)\b/gi, /\b(kobe)\b/gi, /\b(kylie)\b/gi, /\b(kyliejenner)\b/gi, /\b(jenner)\b/gi, /\b(jenners)\b/gi, /\b(la)\b/gi, /\b(law)\b/gi, /\b(laws)\b/gi,
    /\b(lifestyle)\b/gi, /\b(maintenance)\b/gi, /\b(mayweather)\b/gi, /\b(meat)\b/gi, /\b(media)\b/gi, /\b(miles)\b/gi, /\b(minute)\b/gi, /\b(minutes)\b/gi,
    /\b(money)\b/gi, /\b(musk)\b/gi, /\b(ocean)\b/gi, /\b(oil)\b/gi, /\b(oxnard)\b/gi, /\b(paper)\b/gi, /\b(pay)\b/gi, /\b(peasants)\b/gi, /\b(people)\b/gi,
    /\b(peoples)\b/gi, /\b(ppl)\b/gi, /\b(pilot)\b/gi, /\b(pilots)\b/gi, /\b(planes)\b/gi, /\b(plane)\b/gi, /\b(planet)\b/gi, /\b(world)\b/gi, /\b(earth)\b/gi,
    /\b(plastic)\b/gi, /\b(politicians)\b/gi, /\b(politician)\b/gi, /\b(polluting)\b/gi, /\b(pollution)\b/gi, /\b(privacy)\b/gi, /\b(recycle)\b/gi,
    /\b(recycling)\b/gi, /\b(repositioning)\b/gi, /\b(rich)\b/gi, /\b(ride)\b/gi, /\b(rides)\b/gi, /\b(rules)\b/gi, /\b(scam)\b/gi, /\b(scott)\b/gi,
    /\b(seinfeld)\b/gi, /\b(service)\b/gi, /\b(shame)\b/gi, /\b(society)\b/gi, /\b(straw)\b/gi, /\b(straws)\b/gi, /\b(tax)\b/gi, /\b(taxed)\b/gi,
    /\b(taxes)\b/gi, /\b(taylor)\b/gi, /\b(tiktok)\b/gi, /\b(tons)\b/gi, /\b(toronto)\b/gi, /\b(town)\b/gi, /\b(traffic)\b/gi, /\b(trip)\b/gi,
    /\b(trips)\b/gi, /\b(turtles)\b/gi, /\b(twitter)\b/gi, /\b(uk)\b/gi, /\b(valley)\b/gi, /\b(van nuys)\b/gi, /\b(vegan)\b/gi, /\b(vegas)\b/gi,
    /\b(ventura)\b/gi, /\b(county)\b/gi, /\b(waste)\b/gi, /\b(water)\b/gi, /\b(wealth)\b/gi, /\b(wedding)\b/gi];
  
  let change = ["<span class='CLUSTER'>aircraft</span>", "<span class='CLUSTER'>airplane</span>", "<span class='CLUSTER'>airplanes</span>", "<span class='CLUSTER'>airport</span>",
    "<span class='CLUSTER'>airports</span>", "<span class='CLUSTER'>animals</span>", "<span class='CLUSTER'>atmosphere</span>", "<span class='CLUSTER'>aviation</span>",
    "<span class='CLUSTER'>bag</span>", "<span class='CLUSTER'>ban</span>", "<span class='CLUSTER'>beach</span>", "<span class='CLUSTER'>bike</span>", 
    "<span class='CLUSTER'>millionaires</span>", "<span class='CLUSTER'>billionaire</span>", "<span class='CLUSTER'>billionaires</span>",
    "<span class='CLUSTER'>bottle</span>", "<span class='CLUSTER'>boycott</span>", "<span class='CLUSTER'>brands</span>", "<span class='CLUSTER'>bryant</span>",
    "<span class='CLUSTER'>bus</span>", "<span class='CLUSTER'>business</span>", "<span class='CLUSTER'>ca</span>", "<span class='CLUSTER'>california</span>",
    "<span class='CLUSTER'>cam</span>", "<span class='CLUSTER'>camarillo</span>", "<span class='CLUSTER'>cans</span>", "<span class='CLUSTER'>capitalism</span>",
    "<span class='CLUSTER'>car</span>", "<span class='CLUSTER'>cars</span>", "<span class='CLUSTER'>carbon</span>", "<span class='CLUSTER'>celeb</span>",
    "<span class='CLUSTER'>celebrities</span>", "<span class='CLUSTER'>celebrity</span>", "<span class='CLUSTER'>celebs</span>", "<span class='CLUSTER'>change</span>",
    "<span class='CLUSTER'>charter</span>", "<span class='CLUSTER'>chickpeas</span>", "<span class='CLUSTER'>china</span>", "<span class='CLUSTER'>elite</span>",
    "<span class='CLUSTER'>climate</span>", "<span class='CLUSTER'>company</span>", "<span class='CLUSTER'>companies</span>", "<span class='CLUSTER'>consequences</span>",
    "<span class='CLUSTER'>consumption</span>", "<span class='CLUSTER'>corporations</span>", "<span class='CLUSTER'>cosmetics</span>", "<span class='CLUSTER'>makeup</span>",
    "<span class='CLUSTER'>culture</span>", "<span class='CLUSTER'>damage</span>", "<span class='CLUSTER'>dicaprio</span>", "<span class='CLUSTER'>leo</span>",
    "<span class='CLUSTER'>leonardo</span>", "<span class='CLUSTER'>drake</span>", "<span class='CLUSTER'>drakes</span>", "<span class='CLUSTER'>drive</span>",
    "<span class='CLUSTER'>driving</span>", "<span class='CLUSTER'>drought</span>", "<span class='CLUSTER'>eat</span>", "<span class='CLUSTER'>electric</span>",
    "<span class='CLUSTER'>elon</span>", "<span class='CLUSTER'>emissions</span>", "<span class='CLUSTER'>enviromental</span>", "<span class='CLUSTER'>enviroment</span>",
    "<span class='CLUSTER'>europe</span>", "<span class='CLUSTER'>fan</span>", "<span class='CLUSTER'>fans</span>", "<span class='CLUSTER'>fault</span>",
    "<span class='CLUSTER'>fire</span>", "<span class='CLUSTER'>fires</span>", "<span class='CLUSTER'>floyd</span>", "<span class='CLUSTER'>fly</span>",
    "<span class='CLUSTER'>flying</span>", "<span class='CLUSTER'>flight</span>", "<span class='CLUSTER'>food</span>", "<span class='CLUSTER'>footprint</span>",
    "<span class='CLUSTER'>france</span>", "<span class='CLUSTER'>fuel</span>", "<span class='CLUSTER'>garbage</span>", "<span class='CLUSTER'>gas</span>",
    "<span class='CLUSTER'>government</span>", "<span class='CLUSTER'>green</span>", "<span class='CLUSTER'>hamilton</span>", "<span class='CLUSTER'>hangar</span>",
    "<span class='CLUSTER'>hanger</span>", "<span class='CLUSTER'>heat</span>", "<span class='CLUSTER'>helicopters</span>", "<span class='CLUSTER'>henderson</span>",
    "<span class='CLUSTER'>hills</span>", "<span class='CLUSTER'>hollywood</span>", "<span class='CLUSTER'>hour</span>", "<span class='CLUSTER'>hours</span>",
    "<span class='CLUSTER'>hypocrites</span>", "<span class='CLUSTER'>ig</span>", "<span class='CLUSTER'>impact</span>", "<span class='CLUSTER'>india</span>",
    "<span class='CLUSTER'>industry</span>", "<span class='CLUSTER'>jack</span>", "<span class='CLUSTER'>jets</span>", "<span class='CLUSTER'>joke</span>",
    "<span class='CLUSTER'>kardashian</span>", "<span class='CLUSTER'>kardashians</span>", "<span class='CLUSTER'>kim</span>", "<span class='CLUSTER'>kimkardashian</span>",
    "<span class='CLUSTER'>kourtney</span>", "<span class='CLUSTER'>kenny</span>", "<span class='CLUSTER'>kobe</span>", "<span class='CLUSTER'>kylie</span>",
    "<span class='CLUSTER'>kyliejenner</span>", "<span class='CLUSTER'>jenner</span>", "<span class='CLUSTER'>jenners</span>", "<span class='CLUSTER'>la</span>",
    "<span class='CLUSTER'>law</span>", "<span class='CLUSTER'>laws</span>", "<span class='CLUSTER'>lifestyle</span>", "<span class='CLUSTER'>maintenance</span>",
    "<span class='CLUSTER'>mayweather</span>", "<span class='CLUSTER'>meat</span>", "<span class='CLUSTER'>media</span>", "<span class='CLUSTER'>miles</span>",
    "<span class='CLUSTER'>minute</span>", "<span class='CLUSTER'>minutes</span>", "<span class='CLUSTER'>money</span>", "<span class='CLUSTER'>musk</span>",
    "<span class='CLUSTER'>ocean</span>", "<span class='CLUSTER'>oil</span>", "<span class='CLUSTER'>oxnard</span>", "<span class='CLUSTER'>paper</span>",
    "<span class='CLUSTER'>pay</span>", "<span class='CLUSTER'>peasants</span>", "<span class='CLUSTER'>people</span>", "<span class='CLUSTER'>peoples</span>",
    "<span class='CLUSTER'>ppl</span>", "<span class='CLUSTER'>pilot</span>", "<span class='CLUSTER'>pilots</span>", "<span class='CLUSTER'>planes</span>",
    "<span class='CLUSTER'>plane</span>", "<span class='CLUSTER'>planet</span>", "<span class='CLUSTER'>world</span>", "<span class='CLUSTER'>earth</span>",
    "<span class='CLUSTER'>plastic</span>", "<span class='CLUSTER'>politicians</span>", "<span class='CLUSTER'>politician</span>", "<span class='CLUSTER'>polluting</span>",
    "<span class='CLUSTER'>pollution</span>", "<span class='CLUSTER'>privacy</span>", "<span class='CLUSTER'>recycle</span>", "<span class='CLUSTER'>recycling</span>",
    "<span class='CLUSTER'>repositioning</span>", "<span class='CLUSTER'>rich</span>", "<span class='CLUSTER'>ride</span>", "<span class='CLUSTER'>rides</span>",
    "<span class='CLUSTER'>rules</span>", "<span class='CLUSTER'>scam</span>", "<span class='CLUSTER'>scott</span>", "<span class='CLUSTER'>seinfeld</span>",
    "<span class='CLUSTER'>service</span>", "<span class='CLUSTER'>shame</span>", "<span class='CLUSTER'>society</span>", "<span class='CLUSTER'>straw</span>",
    "<span class='CLUSTER'>straws</span>", "<span class='CLUSTER'>tax</span>", "<span class='CLUSTER'>taxed</span>", "<span class='CLUSTER'>taxes</span>",
    "<span class='CLUSTER'>taylor</span>", "<span class='CLUSTER'>tiktok</span>", "<span class='CLUSTER'>tons</span>", "<span class='CLUSTER'>toronto</span>",
    "<span class='CLUSTER'>town</span>", "<span class='CLUSTER'>traffic</span>", "<span class='CLUSTER'>trip</span>", "<span class='CLUSTER'>trips</span>",
    "<span class='CLUSTER'>turtles</span>", "<span class='CLUSTER'>twitter</span>", "<span class='CLUSTER'>uk</span>", "<span class='CLUSTER'>valley</span>",
    "<span class='CLUSTER'>van nuys</span>", "<span class='CLUSTER'>vegan</span>", "<span class='CLUSTER'>vegas</span>", "<span class='CLUSTER'>ventura</span>",
    "<span class='CLUSTER'>county</span>", "<span class='CLUSTER'>waste</span>", "<span class='CLUSTER'>water</span>", "<span class='CLUSTER'>wealth</span>", "<span class='CLUSTER'>wedding</span>"]

  
  for (let i = 1; i < 4293; i++) {
    let identificatore = i.toString();
  for (let k = 0; k < 200; k++) {
      document.getElementById(identificatore).innerHTML = document.getElementById(identificatore).innerHTML.replace(keywords[k], change[k]);
    }
  }


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



function toto() {

  contatorePollution = contatorePollution + 0.07;
  valorePollution = valorePollution + 1;
  document.getElementById("barpoll").style.height = 10 + contatorePollution + "vh";
  document.getElementById("counterpoll").innerHTML = valorePollution;
  }
  
  function totoreverse() {
  
  contatorePollution = contatorePollution - 0.07;
  valorePollution = valorePollution - 1;
  document.getElementById("barpoll").style.height = 10 + contatorePollution + "vh";
  document.getElementById("counterpoll").innerHTML = valorePollution;
  
  }
  

})





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



function toto() {

  contatoreRoutine = contatoreRoutine + 0.07;
  valoreRoutine = valoreRoutine + 1;
  document.getElementById("barrout").style.height = 10 + contatoreRoutine + "vh";
  document.getElementById("counterrout").innerHTML = valoreRoutine;
  }
  
  function totoreverse() {
  
    contatoreRoutine = contatoreRoutine - 0.07;
    valoreRoutine = valoreRoutine - 1;
    document.getElementById("barrout").style.height = 10 + contatoreRoutine + "vh";
    document.getElementById("counterrout").innerHTML = valoreRoutine;
  
  }
 
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

function toto() {

  contatoreRich = contatoreRich + 0.07;
  valoreRich = valoreRich + 1;
  document.getElementById("barrich").style.height = 10 + contatoreRich + "vh";
  document.getElementById("counterrich").innerHTML = valoreRich;
  }
  
  function totoreverse() {
  
    contatoreRich = contatoreRich - 0.07;
    valoreRich = valoreRich - 1;
    document.getElementById("barrich").style.height = 10 + contatoreRich + "vh";
    document.getElementById("counterrich").innerHTML = valoreRich;
  
  }
 
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

function toto() {

  contatoreCelebrities = contatoreCelebrities + 0.07;
  valoreCelebrities = valoreCelebrities + 1;
  document.getElementById("barcele").style.height = 10 + contatoreCelebrities + "vh";
  document.getElementById("countercele").innerHTML = valoreCelebrities;
  }
  
  function totoreverse() {
  
    contatoreCelebrities = contatoreCelebrities - 0.07;
    valoreCelebrities = valoreCelebrities - 1;
    document.getElementById("barcele").style.height = 10 + contatoreCelebrities + "vh";
    document.getElementById("countercele").innerHTML = valoreCelebrities;
  
  }
 
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

function toto() {

  contatoreEveryday = contatoreEveryday + 0.07;
  valoreEveryday = valoreEveryday + 1;
  document.getElementById("barever").style.height = 10 + contatoreEveryday + "vh";
  document.getElementById("counterever").innerHTML = valoreEveryday;
  }
  
  function totoreverse() {
  
    contatoreEveryday = contatoreEveryday - 0.07;
    valoreEveryday = valoreEveryday - 1;
    document.getElementById("barever").style.height = 10 + contatoreEveryday + "vh";
    document.getElementById("counterever").innerHTML = valoreEveryday;
  
  }
 
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

