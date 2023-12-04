let museumImage;
let burjImage;
let palmImage;
let safariImage;
let camelImage;
let desert;
let desert2;

let camel;

// let mapleImage;
//  let bagelsImage;
//  let butterImage;

function preload() {
  museumImage= loadImage("images/museum.jpeg");
 burjImage = loadImage("images/burjkhalifa.jpeg");
 palmImage = loadImage("images/palm.jpeg");
safariImage = loadImage("images/safari.jpeg");

mapleImage = loadImage("images/baklava.png");
bagelsImage = loadImage("images/shawarma.png");
butterImage = loadImage("images/falafel.png");
ravioliImage = loadImage("images/masgouf.png");


camelImage= loadImage("images/camel.png");
desertImage = loadImage("images/desert.png");
desert2Image = loadImage("images/desert2.png");

//  mapleImage = loadImage("images/maple.png");
// bagelsImage = loadImage("images/bagels.png");
// butterImage = loadImage("images/butter.png");
 

    // glass = new Glass;
  }
  
  function setup() {
    let cnv = createCanvas(1450,1500);
    cnv.parent("canvasWrapper");
    cnv.position(0,200);
    cnv.style('z-index','-1');

    camel=new Camel;
  
  }
  
  function draw() {
    background(223,201,181);

    image(mapleImage, 20, 130, 390, 390);
    image(bagelsImage, 300, 130, 340, 370);
    image(butterImage, 560, 130, 340, 370);
    image(ravioliImage, 860, 130, 360, 330);


    image(desertImage,0, 960, 590, 540);
    image(desert2Image,570, 960, 590, 540);
    image(desertImage,1150, 960, 590, 540);

    camel.display();
    camel.update();

    // image(mapleImage, 20, 150, 290, 370);
    // image(bagelsImage, 350, 220, 260, 300);
    // image(butterImage, 550, 220, 260, 300);

    textSize(20);
    fill(255);
      stroke(70,51,20);
      strokeWeight(4);
      text("DESERT SAFARI", 180, 850);
    image(safariImage,120, 580, 290, 240);


    fill(255);
      stroke(70,51,20);
      strokeWeight(4);
      text("MUSEUM OF THE FUTURE", 460, 870);
    image(museumImage, 440, 580, 290, 260);

    fill(255);
      stroke(70,51,20);
      strokeWeight(4);
      text("BURJ KHALIFA", 830, 850);
    image(burjImage,750, 580, 290, 240);


    fill(255);
      stroke(70,51,20);
      strokeWeight(4);
      text("PALM JUMEIRAH", 1140, 870);
    image(palmImage,1060, 580, 300, 260);


    push();
    fill(255);
      stroke(70,51,20);
      textSize(30);
      strokeWeight(4);
      text("WHERE TO GO", 100, 530);
      pop();

      push();
      fill(255);
        stroke(70,51,20);
        textSize(30);
        strokeWeight(4);
        text("FOOD", 100, 130);
        pop();

  }

  class Camel{
    constructor(startX,startY){
        this.x=750;
        this.y=550;
        this.speedx=1
        this.img=camelImage;
    }

    update(){
this.x = this.x - this.speedx;

if (this.x <=-400 ) {
  this.x=750
}
    }
    display(){
        push();
        translate(this.x,this.y);


        image(this.img,this.x,this.y,400,400);

        pop();
    }
}
   


  
  
 