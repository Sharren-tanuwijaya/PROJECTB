let NUM_OF_SNOW = 150; 
let snow = [];

let NUM_OF_LIGHTS = 100; 
let lights = [];

let snowman1;
let snowman2;
// let snowman3;
// let snowman4;

let snowman2Image;
let snowman1Image;

let norwayImage;
let norwayImage2;
let norwayImage3;
let norwayImage4;

let food1Image;
let food2Image;
let food3Image;
let food4Image;

let light = false;

function preload() {
  norwayImage = loadImage("images/lofoten.jpeg");
  norwayImage2 = loadImage("images/northern.jpeg");
  norwayImage3 = loadImage("images/bergen.jpeg");
  norwayImage4 = loadImage("images/geiranger.jpeg");

  food1Image = loadImage("images/lamb.png");
  food2Image = loadImage("images/fish.png");
  food3Image = loadImage("images/salmon.png");
  food4Image= loadImage("images/salmon2.png");

  snowman2Image= loadImage("images/snowman2.png");
  snowman1Image= loadImage("images/snowman1.png");
  
  
  
  }
  
  function setup() {
    let cnv = createCanvas(1450, 1450);
  cnv.parent("canvasWrapper");
  cnv.position(0,200);
  cnv.style('z-index','-1');
  
  for (let i = 0; i < NUM_OF_SNOW; i++) {
    snow[i] = new Snow(random(0,1400),0, random(10,28),random(-1,2),random(1.5,3));
  
  }
  for (let i = 0; i < NUM_OF_LIGHTS; i++) {
    lights[i] = new Lights(random(0,1400),random(0,1400), random(10,28));
  
  }

  snowman1 = new Snowman(205,950,0.5,snowman1Image);
  snowman2 = new Snowman(1105,950,-0.5,snowman2Image);
  
  // snowman3 = new Snowman(200,1100,180,0.5,200,900,250,950);
  // snowman4 = new Snowman(1100,1100,180,-0.5,900,100,950,150);
  }
  
  function draw() {
    background(137, 212, 249);

    snowman1.update(); 
    snowman1.display();
    snowman2.update(); 
    snowman2.display();

    // snowman3.update(); 
    // snowman3.display();
    // snowman4.update(); 
    // snowman4.display();

    if (light == true) {
      for (let i = 0; i < lights.length; i++) {
        let l = lights[i];
        l.update();
        l.display();
      }
    }
    

    // console.log(snowman1.x);
    if (snowman1.x == snowman2.x) {
      console.log("work")
      light = true;
    }
    // if(snowman1&&snowman3 == snowman2&&snowman4){
    //   for (let i = 0; i < lights.length; i++) {
    //     let l = lights[i];
    //     l.update();
    //     l.display();
    //   }
    // }
  

    for (let i = 0; i < snow.length; i++) {
      let s = snow[i];
      s.update();
      s.display();
    }

    image(food1Image, 12, 100, 400, 400);
    image(food2Image, 350, 130, 400, 400);
    image(food3Image, 690, 130, 400, 400);
    image(food4Image, 1060, 130, 400, 400);

    textSize(18);
     fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("LOFOTEN", 200, 860);
    image(norwayImage, 120, 580, 260, 250);

    fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("NOTHERN NORWAY", 480, 860);
    image(norwayImage2, 440, 580, 260, 250);
  
    fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("BERGEN", 840, 860);
    image(norwayImage3, 750, 580, 260, 250);

    fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("GEIRANGERFJORD", 1110, 860);
    image(norwayImage4, 1060, 580, 260, 250);

push();
    fill(255);
      stroke(168, 52, 125);
      textSize(30);
      strokeWeight(4);
      text("WHERE TO GO", 100, 530);
      pop();

      push();
      fill(255);
        stroke(64,52,37);
        textSize(30);
        strokeWeight(4);
        text("FOOD", 100, 130);
        pop();

      // if(mouseIsPressed) {
  
      //   fill(63,159,134);
          
      //     strokeWeight(3);
      //     line(mouseX +50, mouseY -100, mouseX+20, mouseY+0);
          
      //   }
    
  }

  

class Snow {

  constructor(startX,startY,dia,speedX,speedY) {
    this.x = startX;
    this.y = startY;
    this.dia = dia;
    this.speedY=speedY;
    this.speedX=speedX
  
  }

  update() {
    this.y = this.y + this.speedY;
    this.x=this.x+this.speedX * 0.8;

    if(this.y>=1250){
      this.y=0
      


      
    }
    
  }

  display() {

    fill(255);
    noStroke();
    circle(this.x,this.y,this.dia);


  
  }

}

class Snowman {

  constructor(startX,startY,speedS,image) {
    this.x = startX;
    this.y = startY;
    // this.dia = dia;
    // this.speedY=speedY;
    this.speedS=speedS
    // this.larmAngle = 0;
    // this.armX=X
    // this.armY=Y
    // this.armX2=X2
    // this.armY2=Y2
    this.image=image
  
  }

  update() {

    this.x = this.x + this.speedS;
    // this.armX= this.armX+this.speedS

    // this.larmAngle += 5;


    
    
  }

  display() {

    image(this.image, this.x, this.y,300, 500);
    
//arm
    // line(-40, -10, -60, -10); // horizontal arm part
    // push();
    // rotate(this.larmAngle);
    // line(0, 0, -20, 0);
    // pop();

    // line(40, -10, 60, -10); // horizontal arm part
    // push();
    // rotate(this.larmAngle);
    // line(0, 0, 20, 0);
    // pop();


  
  }

}

class Lights {

  constructor(startX,startY,dia) {
    this.x = startX;
    this.y = startY;
    this.dia = dia;
  
  }

  update() {

    this.dia = 6.5 + sin(frameCount * 3) * 6.5;
  }

  display() {

    fill(252, 245, 95);
    noStroke();
    circle(this.x,this.y,this.dia);


  
  }

}
