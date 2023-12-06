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

let germanSound;






function preload() {
    // beerImage = loadImage("images/beer.png");
berlinerImage = loadImage("images/berliner.png");
pretzelsImage= loadImage("images/pretzels.png");
bratwurstImage= loadImage("images/bratwurst.png");
rouladenImage= loadImage("images/rouladen.png");
 blutwurstImage= loadImage("images/blutwurst.png");

titiseeImage =loadImage("images/titisee.jpeg");
neushImage =loadImage("images/neush.jpeg");
rothenburgImage=loadImage("images/rothenburg.jpeg");
zugspitzeImage = loadImage("images/zugspitze.jpeg");
wordsImage= loadImage ("images/words.png");

germanSound= loadSound("sound/german.mp3");
 

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
      stroke(114,90,74);
      textSize(20);
      strokeWeight(4);
      text("WORDS YOU NEED TO KNOW ", 60, 150);
      text("BEFORE GOING TO GERMANY ", 60, 180);
    image(wordsImage, 10, 200, 400, 650);

    fill(255);
    stroke(114,90,74);
    rect(110,780,190,30)
    fill(0);
    stroke(0);
    textSize(19);
    strokeWeight(3);
    text("PRESS TO LISTEN", 122, 802);

    push();
    fill(0);
      stroke(114,90,74);
      textSize(30);
      strokeWeight(4);
      text("WHERE TO GO", 500, 400);
      pop();

      push();
      fill(0);
        stroke(114,90,74);
        textSize(30);
        strokeWeight(4);
        text("FOOD", 500, 90);
        pop();

        fill(255);
        stroke(114,90,74);
        strokeWeight(4);
        text("TITISEE LAKE", 970, 1070);
      image(titiseeImage, 900, 840, 260, 200);
  
      fill(255);
        stroke(114,90,74);
        strokeWeight(4);
        text("NEUSCHWANSTEIN CASTLE", 900, 780);
      image(neushImage, 900, 450, 260, 300);
    
      fill(255);
        stroke(114,90,74);
        strokeWeight(4);
        text("ROTHENBURG OB DER TAUBER", 505, 720);
      image(rothenburgImage, 510, 780, 240, 220);
  
      fill(255);
        stroke(114,90,74);
        strokeWeight(4);
        text("ZUGSPITZE", 590, 1020);
      image(zugspitzeImage, 510, 450, 300, 250);
  
  }


  
  function mousePressed(){

    if(mouseX >= 110 && mouseX <= 300 && mouseY >= 780 && mouseY <= 810 && germanSound.isPlaying()==false){
     germanSound.play(); 
    }else{
      germanSound.pause();
    }
  }
