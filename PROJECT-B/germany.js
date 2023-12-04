// let beerImage;
// // let glass;
let berlinerImage;
let pretzelsImage;
let bratwurstImage;
let rouladenImage;
let blutwurstImage;

let titiseeImage;
let neushImage;
let rothenburgImage;
let zugspitzeImage;

let wordsImage;







function preload() {
    // beerImage = loadImage("images/beer.png");
berlinerImage = loadImage("images/berliner.PNG");
pretzelsImage= loadImage("images/pretzels.PNG");
bratwurstImage= loadImage("images/bratwurst.PNG");
rouladenImage= loadImage("images/rouladen.PNG");
 blutwurstImage= loadImage("images/blutwurst.PNG");

titiseeImage =loadImage("images/titisee.jpeg");
neushImage =loadImage("images/neush.jpeg");
rothenburgImage=loadImage("images/rothenburg.jpeg");
zugspitzeImage = loadImage("images/zugspitze.jpeg");
wordsImage= loadImage ("images/words.png");
 

    // glass = new Glass;

  
  }
  
  function setup() {
    let cnv = createCanvas(1450,1100);
    cnv.parent("canvasWrapper");
    cnv.position(0,200);
    cnv.style('z-index','-1');
  
  }
  
  function draw() {
    background(200);

    image(berlinerImage, 450, 40, 260, 300);
    image(pretzelsImage, 700, 40,  260, 300);
    image(rouladenImage, 950, 40, 260, 300);
    image(blutwurstImage, 1200, 40, 260, 300);

   

    fill(0);
      stroke(168, 52, 125);
      textSize(20);
      strokeWeight(4);
      text("WORDS YOU NEED TO KNOW ", 60, 150);
      text("BEFORE GOING TO GERMANY ", 60, 180);
      pop();
    image(wordsImage, 10, 200, 400, 500);

    fill(255);
    stroke(66,127,113);
    rect(110,630,190,30)
    fill(0);
    stroke(0);
    textSize(19);
    strokeWeight(3);
    text("PRESS TO LISTEN", 122, 652);

    push();
    fill(0);
      stroke(168, 52, 125);
      textSize(30);
      strokeWeight(4);
      text("WHERE TO GO", 500, 400);
      pop();

      push();
      fill(0);
        stroke(168, 52, 125);
        textSize(30);
        strokeWeight(4);
        text("FOOD", 500, 90);
        pop();

        fill(255);
        stroke(168, 52, 125);
        strokeWeight(4);
        text("TITISEE LAKE", 970, 1070);
      image(titiseeImage, 900, 840, 260, 200);
  
      fill(255);
        stroke(168, 52, 125);
        strokeWeight(4);
        text("NEUSCHWANSTEIN CASTLE", 900, 780);
      image(neushImage, 900, 450, 260, 300);
    
      fill(255);
        stroke(168, 52, 125);
        strokeWeight(4);
        text("ROTHENBURG OB DER TAUBER", 505, 720);
      image(rothenburgImage, 510, 780, 240, 220);
  
      fill(255);
        stroke(168, 52, 125);
        strokeWeight(4);
        text("ZUGSPITZE", 590, 1020);
      image(zugspitzeImage, 510, 450, 300, 250);
  
  }


  
  
 