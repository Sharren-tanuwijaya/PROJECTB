let locomocoImage;
let shaveImage;
let pokeImage;
let musubiImage;

let oahuImage;
 let honoluluImage;
 let kauaiImage;
 let mauiImage;
 let huliImage;

 let hawaii1Music;
 let hawaii2Music;

function preload() {
  locomocoImage= loadImage("./images/locomoco.png");
 shaveImage = loadImage("./images/shave.png");
 pokeImage = loadImage("./images/poke.png");
musubiImage = loadImage("./images/musubi.png");
huliImage = loadImage("https://github.com/Sharren-tanuwijaya/PROJECTB/blob/main/PROJECT-B/images/hulihuli.PNG");

 oahuImage = loadImage("./images/oahu.jpeg");
 honoluluImage = loadImage("./images/honolulu.jpeg");
 kauaiImage = loadImage("./images/kauai.jpeg");
 mauiImage = loadImage("./images/maui.jpeg");

hawaii1Music= loadSound("sound/hawaii1.mp3");
hawaii2Music= loadSound("sound/hawaii2.mp3");


    

    // glass = new Glass;
  }
  
  function setup() {
    let cnv = createCanvas(1450,900);
    cnv.parent("canvasWrapper");
    cnv.position(0,200);
    cnv.style('z-index','-1');
  
  }
  
  function draw() {
    background(133,255,226);

    image(locomocoImage, 20, 150, 320, 370);
    image(shaveImage, 300, 220, 260, 300);
    image(pokeImage, 480, 220, 400, 400);
    image(musubiImage, 750, 190, 430, 400);
    image(huliImage, 1050, 190, 350, 350);

    textSize(20);
    fill(255);
    stroke(66,127,113);
    strokeWeight(4);
      text("OAHU", 230, 850);
    image(oahuImage,120, 580, 290, 240);


    fill(255);
    stroke(66,127,113);
    strokeWeight(4);
      text("HONOLULU", 510, 870);
    image(honoluluImage, 440, 580, 290, 260);

    fill(255);
    stroke(66,127,113);
    strokeWeight(4);
      text("KAUAI", 850, 850);
    image(kauaiImage,750, 580, 290, 240);


    fill(255);
    stroke(66,127,113);
    strokeWeight(4);
      text("MAUI", 1190, 870);
    image(mauiImage,1060, 580, 300, 260);


    push();
    fill(173,193,189);
    stroke(66,127,113);
      textSize(30);
      strokeWeight(4);
      text("WHERE TO GO", 100, 560);
      pop();

      push();
      fill(173,193,189);
      stroke(66,127,113);
        textSize(30);
        strokeWeight(4);
        text("FOOD", 100, 220);
        pop();


    stroke(66,127,113);
    rect(650,130,100,30)
    fill(255);
    stroke(0);
    textSize(19);
    strokeWeight(3);
    text("hawaii 1", 665, 151);

    stroke(66,127,113);
    rect(770,130,100,30)
    fill(255);
    stroke(0);
    textSize(19);
    strokeWeight(3);
    text("hawaii 2", 785, 151);
    

    fill(255);
        stroke(66,127,113);
        textSize(18);
        strokeWeight(4);
        text("CHOOSE YOUR THEME SONG", 620, 110);


  }
  function mousePressed(){

    if(hawaii1Music.isPlaying()==false){
     hawaii1Music.play(); 
    }else{
      hawaii1Music.pause();
    }
  }


  
  
 