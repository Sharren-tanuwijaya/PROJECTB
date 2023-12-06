let niagaraImage;
let banffImage;
let lakelouiseImage;
let jasperImage;

let mapleImage;
 let bagelsImage;
 let butterImage;
 let poutine;
 let bars;

 let beaverSound;
 let mooseSound;
 let bearSound;

 let beaverImage;
 let mooseImage;
 let bearImage;



function preload() {
  niagaraImage= loadImage("images/niagara.jpeg");
 banffImage = loadImage("images/banff.jpeg");
 lakelouiseImage = loadImage("images/lakelouise.jpeg");
jasperImage = loadImage("images/jasper.jpeg");

 mapleImage = loadImage("images/maple.png");
bagelsImage = loadImage("images/bagels.png");
butterImage = loadImage("images/butter.png");
barsImage = loadImage("images/bar.png");
poutineImage = loadImage("images/poutine.png");

beaverSound= loadSound("sound/beaver.mp3");
mooseSound= loadSound("sound/moose.mp3");
bearSound= loadSound("sound/bear.mp3");
 
beaverImage = loadImage("images/beaver.png");
mooseImage = loadImage("images/moose.png");
bearImage = loadImage("images/bear.png");


    // glass = new Glass;
  }
  
  function setup() {
    let cnv = createCanvas(1450,1500);
    cnv.parent("canvasWrapper");
    cnv.position(0,200);
    cnv.style('z-index','-1');
  
  }
  
  function draw() {
    background(255,220,228);

    image(mapleImage, 20, 100, 290, 370);
    image(bagelsImage, 300, 130, 260, 300);
    image(butterImage, 560, 130, 260, 300);
    image(barsImage, 800, 130, 350, 350);
    image(poutineImage, 1060, 130, 350, 350);

    textSize(20);
    fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("NIAGARA FALLS", 190, 820);
    image(niagaraImage,120, 540, 290, 240);


    fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("BANFF NATIONAL PARK", 480, 800);
    image(banffImage, 440, 540, 290, 230);

    fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("JASPER NATIONAL PARK", 775, 810);
    image(jasperImage,750, 540, 290, 240);


    fill(255);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("LAKE LOUISE", 1140, 830);
    image(lakelouiseImage,1060, 540, 300, 260);

    rect(350,1250,200,30)
    fill(0);
    stroke(168, 52, 125);
    textSize(19);
    strokeWeight(3);
    text("BEAR SOUND", 387, 1272);
    image(bearImage, 300, 900, 290, 330);
    
    fill(255);
    rect(700,1250,200,30)
    fill(0);
    stroke(168, 52, 125);
    textSize(19);
    strokeWeight(4);
    text("BEAVER SOUND", 728, 1272);
    image(beaverImage, 650, 950, 260, 270);

    fill(255);
    rect(1060,1250,200,30)
    fill(0);
    stroke(168, 52, 125);
    textSize(19);
    strokeWeight(4);
    text("MOOSE SOUND",1090,1272);
    image(mooseImage, 970, 930, 300, 300);


    push();
    fill(0);
      stroke(168, 52, 125);
      textSize(30);
      strokeWeight(4);
      text("WHERE TO GO", 100, 500);
      pop();

      push();
      fill(0);
        stroke(168, 52, 125);
        textSize(30);
        strokeWeight(4);
        text("FOOD", 100, 130);
        pop();


  }

  function mousePressed(){

    if(mouseX >= 350 && mouseX <= 550 && mouseY >= 1250 && mouseY <= 1280 && bearSound.isPlaying()==false){
     bearSound.play(); 
    }else{
      bearSound.pause();
    }

    if(mouseX >= 700 && mouseX <= 900 && mouseY >= 1250 && mouseY <= 1280 && beaverSound.isPlaying()==false){
      beaverSound.play(); 
     }else{
      beaverSound.pause();
     }

     if(mouseX >= 1060 && mouseX <= 1260 && mouseY >= 1250 && mouseY <= 1280 && mooseSound.isPlaying()==false){
      mooseSound.play(); 
     }else{
      mooseSound.pause();
     }
    }
   

   



   


  
  
 