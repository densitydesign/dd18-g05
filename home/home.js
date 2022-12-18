gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards",
    pin: true,
    start: "top top ",
    end: "bottom+=900",
    markers: false,
    scrub: true   
  }
});

tl.to(".first", {
  y: "-80vh"
})
.to(".second", {
    y: "-80vh"
  })
.to(".third",{
      y: "-80.5vh"
    }
,"-=0.05"
   
  );





function sketch_box1( sketch ) {

  sketch.Mover=function(){
    this.location = sketch.createVector(sketch.random(sketch.width), sketch.random(sketch.height));
    this.velocity = sketch.createVector(sketch.random(-2, 2), sketch.random(-2, 2));
    this.acceleration = sketch.createVector(-0.01,0.01); // 2 a constant accelleration, for now
    this.topspeed = 6; //2
  this.plane=sketch.random(airplane)
    this.update = function() {
      // 4 Move towards the mouse. Delete part 3
      let mouse = sketch.createVector(sketch.mouseX,sketch.mouseY);
      let dir = p5.Vector.sub(mouse, this.location);
      dir.normalize();
      dir.mult(0.09);
      this.acceleration = dir;
  
  
   
  
      //2
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.topspeed);
  
      // 1
      this.location.add(this.velocity);
    }

    this.display = function(p1) {
      
      
      sketch.image(this.plane,this.location.x,this.location.y,w/40,w/40);

    }
  
    this.checkEdges = function() {
      if (this.location.x > sketch.width) {
        this.location.x = 0;
      } else if (this.location.x < 0) {
        this.location.x = sketch.width;
      }
  
      if (this.location.y > sketch.height) {
        this.location.y = 0;
      } else if (this.location.y < 0) {
        this.location.y = sketch.height;
      }
    }
  }

  let mover;

// 5

let movers = [];
  
  
  let airplane=[]

  
  var element = document.getElementById('box1');
  var positionInfo = element.getBoundingClientRect();
  var h = positionInfo.height;
  var w = positionInfo.width;
  
  
  
  let x = 320;
  let y = 180;
  let xspeed = 2;
  let yspeed = 3;
  
  let r = 300;
  sketch.preload=function(){
      airplane[0] = sketch.loadImage("./assets/pics/AEREOPLANINI/ARANCIO.png");
      airplane[1] = sketch.loadImage("./assets/pics/AEREOPLANINI/GIALLO.png");
      airplane[2] = sketch.loadImage("./assets/pics/AEREOPLANINI/ROSA.png");
      airplane[3] = sketch.loadImage("./assets/pics/AEREOPLANINI/VERDE.png");
      airplane[4] = sketch.loadImage("./assets/pics/AEREOPLANINI/VIOLA.png");



  }

  sketch.setup = function() {
    let canvas1
    canvas1 = sketch.createCanvas(w, h);
    canvas1.id("canvas1") 
    mover = new sketch.Mover();

      for (let i = 0; i < 100; i++) {
        movers[i] = new sketch.Mover();
    
      } 

  }

  sketch.draw = function() {

    element = document.getElementById('box1');
    positionInfo = element.getBoundingClientRect();
    h = positionInfo.height;
    w = positionInfo.width;

     sketch.background("#F1F1F1")
    mover.update();
       // 4 remove check edges
       mover.checkEdges();
       //mover.display();
     
     
       for (let i = 0; i < movers.length; i++) {
         movers[i].update();
         //movers[i].checkEdges();
         movers[i].display();
       }

   

     
  }
  sketch.windowResized= function() {
    sketch.resizeCanvas(w, h);
  }

  
  
  
};


new p5(sketch_box1, "box1");



