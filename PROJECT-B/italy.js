let amalfiImage;
let cinqueImage;
let dolomitesImage;
let lakeImage;

let mapleImage;
 let bagelsImage;
 let butterImage;
 let ravioliImage;

 let italyMusic;

function preload() {
amalfiImage= loadImage("images/amalfi.jpeg");
 cinqueImage = loadImage("images/cinque.png");
 dolomitesImage = loadImage("images/dolomites.jpeg");
lakeImage = loadImage("images/lake.jpeg");

mapleImage = loadImage("images/lasagna.png");
bagelsImage = loadImage("images/spage.png");
butterImage = loadImage("images/pannacotta.png");
ravioliImage = loadImage("images/ravioli.png");

italyMusic= loadSound("sound/italy.mp3");

    // glass = new Glass;
  }
  
  function setup() {
    let cnv = createCanvas(1450,900);
    cnv.parent("canvasWrapper");
    cnv.position(0,200);
    cnv.style('z-index','-1');
  
  }
  
  function draw() {
    background(214,176,126);

    image(mapleImage, 20, 100, 290, 370);
    image(bagelsImage, 300, 130, 340, 370);
    image(butterImage, 560, 130, 340, 370);
    image(ravioliImage, 860, 130, 340, 370);

    textSize(20);
    fill(255);
      stroke(64,52,37);
      strokeWeight(4);
      text("AMALFI COAST", 190, 850);
    image(amalfiImage,120, 580, 290, 240);


    fill(255);
      stroke(64,52,37);
      strokeWeight(4);
      text("CINQUE TERRE", 500, 870);
    image(cinqueImage, 440, 580, 290, 260);

    fill(255);
      stroke(64,52,37);
      strokeWeight(4);
      text("DOLOMITES", 820, 850);
    image(dolomitesImage,750, 580, 290, 240);


    fill(255);
      stroke(64,52,37);
      strokeWeight(4);
      text("LAKE COMO", 1150, 870);
    image(lakeImage,1060, 580, 300, 260);


    push();
    fill(255);
      stroke(64,52,37);
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

  }

  function mousePressed(){
    if(italyMusic.isPlaying()==false){
      italyMusic.play(); 
     }else{
      italyMusic.pause();
     }
    }

   
