// console.log("js is linked!");

let earthImage;
let airplaneImage;
let textImage;

let airplane;
let clouds = [];
let link;

let bucketlistImage;
let a1;
let a2;
let a3;
let a4;
let a5;
let a6;
let a7;


let airplaneShake;

function preload() {
  earthImage = loadImage("images/earth.png");
  airplaneImage = loadImage("images/airplane.png");
  bucketlistImage =loadImage("images/bucketlist.png");
  textImage =loadImage("images/text1.png");


}

function setup() {
  let cnv = createCanvas(1450, 1000);
  cnv.parent("canvasWrapper");
  cnv.position(0,0);
  cnv.style('z-index','-1');
  airplane = new Airplane;

  // cloud1 = new Clouds(69,100,1);
  // cloud2 = new Clouds(100,500,0.8);
  // cloud3 = new Clouds(400,700,1);
  // cloud4 = new Clouds(1200,150,-1);
  // cloud5 = new Clouds(1000,580,-0.6);
  clouds.push(new Clouds(69,100,1));
  clouds.push(new Clouds(100,500,0.8));
  clouds.push(new Clouds(400,700,1));
  clouds.push(new Clouds(1200,150,-1));
  clouds.push(new Clouds(1000,580,-0.6));

  link = new Link;
 

}

function draw() {
  background(137, 212, 249);

 

  image(earthImage, 410, 150, 700, 700);
  image(bucketlistImage, 30, 300, 320, 400);
  image(textImage, 1150, 300, 270, 390);


  airplane.update();
  airplane.display();
  // cloud1.update();
  // cloud1.display();
  // cloud2.update();
  // cloud2.display();
  // cloud3.update();
  // cloud3.display();
  // cloud4.update();
  // cloud4.display();
  // cloud5.update();
  // cloud5.display();
  for (let i = 0; i < clouds.length; i ++) {
    clouds[i].update();
    clouds[i].display();
  }



  for (let i = 0; i < clouds.length; i ++) {
    if (dist(airplane.x, airplane.y, clouds[i].x, clouds[i].y)<= 100) {
      
      airplaneShake = millis();
      airplane.shake();
    }
  }
  let curTime = millis();
  if ((curTime-airplaneShake) >= 600) {
    // console.log(airplaneShake)
    airplane.stopShake();
  }
  link.display();
  link.update();
  

  // fill(255);
  // // showing the coordinates of x and y on the canvas
  // text("x:" + mouseX + "y:" + mouseY, mouseX, mouseY);

}

class Airplane {
  constructor(startX, startY) {
    this.x = 171;
    this.y = 150;
    this.goalX = 200;
    this.goalY = 200;
    this.sizeW = 190;
    this.sizeH = 90;

    this.shakeBoolean = false;
    this.rotateAngle;
  }
  shake() {
    this.shakeBoolean = true;
    // console.log('work');
  }
  stopShake() {
    this.shakeBoolean = false;
    // console.log('stop')
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    if (key == "1") {
      this.x = lerp(this.x, this.goalX + 159, 0.02);
      this.y = lerp(this.y, this.goalY + 276, 0.02);


      fill(255, 214, 230);

      stroke(168, 52, 125);
      strokeWeight(4);

      text("HAWAII !", 386, 478);

    }

    if (key == "2") {
      this.x = lerp(this.x, this.goalX + 232, 0.02);
      this.y = lerp(this.y, this.goalY + 52.5, 0.02);


      fill(255, 214, 230);

      stroke(168, 52, 125);
      strokeWeight(4);
      text("CANADA!", 462, 249);

    }
    if (key == "3") {
      this.x = lerp(this.x, this.goalX + 473, 0.02);
      this.y = lerp(this.y, this.goalY + 80, 0.02);


      fill(255, 214, 230);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("GERMANY!", 692, 285);

    }
    if (key == "4") {
      this.x = lerp(this.x, this.goalX + 483, 0.02);
      this.y = lerp(this.y, this.goalY + 133.5, 0.02);

      fill(255, 214, 230);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("ITALY!", 755, 330);

    }
    if (key == "5") {
      this.x = lerp(this.x, this.goalX + 586, 0.02);
      this.y = lerp(this.y, this.goalY + 127.5, 0.02);

      fill(255, 214, 230);

      stroke(168, 52, 125);
      strokeWeight(4);

      text("GREECE!", 789, 322);
    }
    if (key == "6") {
      this.x = lerp(this.x, this.goalX + 650, 0.02);
      this.y = lerp(this.y, this.goalY + 175, 0.02);


      fill(255, 214, 230);

      stroke(168, 52, 125);
      strokeWeight(4);

      text("DUBAI!", 891, 370.5);
    }

    if (key == "7") {
      this.x = lerp(this.x, this.goalX + 525, 0.02);
      this.y = lerp(this.y, this.goalY - 54.5, 0.02);


      fill(255, 214, 230);
      stroke(168, 52, 125);
      strokeWeight(4);
      text("NORWAY!", 755, 135.5);

    }

  }
  display() {

    textStyle(BOLD);
    textSize(25);
    textFont("Montsersrat");
    push();
    translate(this.x, this.y);
    if (this.shakeBoolean) {
      this.rotateAngle= map(sin(frameCount*0.1), -1, 1, -0.05, 0.15)
      rotate(this.rotateAngle);
    }
    image(airplaneImage, 0, 0, this.sizeW, this.sizeH);
    pop()
  }
}

class Clouds {
  constructor(startx,starty,speedX) {
    this.x = startx;
    this.y = starty;
    this.speedX = speedX;


  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.x = this.x + this.speedX;

    if (this.x >=1500 ) {
      this.x=0
    }

  }
  display() {

    noStroke();
    fill(255);
    ellipse(this.x, this.y, 90, 55);
    ellipse(this.x - 31, this.y + 28, 80, 60);
    ellipse(this.x + 45, this.y + 17, 95, 55);
    ellipse(this.x + 8, this.y + 40, 50, 40);

  }
}

class Link {
  constructor() {
    this.x = 0
    this.y = 0

  }

  update() {

    // if (key == "1") {
    //   a1=document.createElement('a')
    //   let linkText = document.createTextNode("EXPLORE HERE!");
    //   a1.appendChild(linkText);
    //   a1.title = "EXPLORE HERE!";
    //   a1.href = "http://127.0.0.1:5500/PROJECT-B/hawaii.html";
    //   // console.log(a1);
    //   document.body.appendChild(a1);
    //   // a1.position(this.x + 390, this.y + 478);
      
    // }
    // if (key == "2") {
    //   a1.remove();
    //   a2=document.createElement('a')
    //   let linkText = document.createTextNode("EXPLORE HERE!");
    //   a2.appendChild(linkText);
    //   a2.title = "EXPLORE HERE!";
    //   a2.href = "http://127.0.0.1:5500/PROJECT-B/canada.html";
    //   document.body.appendChild(a2);
    //   // a2.position(this.x + 451, this.y + 204);
    // }
    // if (key == "3") {
    //   let a = createA('http://127.0.0.1:5500/PROJECT-B/germany.html', 'EXPLORE HERE!');
    //   a.position(this.x + 685, this.y + 243);
     
    // }

  }

  display() {
   
  }

}

function keyPressed(){
  if (key == "1") {
    try{
      a3.remove();
      a2.remove();
      a4.remove();
      a5.remove();
      a6.remove();
      a7.remove();
      }
      finally{
        a1=document.createElement('a')
        let linkText1 = document.createTextNode("EXPLORE HERE!");
        a1.appendChild(linkText1);
        a1.title = "EXPLORE HERE!";
        a1.href = "https://sharren-tanuwijaya.github.io/PROJECTB/PROJECT-B/hawaii.html";
        document.body.appendChild(a1);
        a1.style.position='absolute';
        a1.style.top='430px';
        a1.style.left='370px';
        console.log(a1);
      }
   
    
    
  }
  if (key == "2") {
    try{
      a1.remove();
      a3.remove();
      a4.remove();
      a5.remove();
      a6.remove();
      a7.remove();
      }
    finally{    
    a2=document.createElement('a')
    let linkText2 = document.createTextNode("EXPLORE HERE!");
    a2.appendChild(linkText2);
    a2.title = "EXPLORE HERE!";
    a2.href = "https://sharren-tanuwijaya.github.io/PROJECTB/PROJECT-B/canada.html";
    document.body.appendChild(a2);
    a2.style.position='absolute';
    a2.style.top='194px';
    a2.style.left='467px';
    }
    
    
  }
  if (key == "3") {
    try{
      a1.remove();
      a2.remove();
      a4.remove();
      a5.remove();
      a6.remove();
      a7.remove();
    }
  finally{  
    
    a3=document.createElement('a')
    let linkText3 = document.createTextNode("EXPLORE HERE!");
    a3.appendChild(linkText3);
    a3.title = "EXPLORE HERE!";
    a3.href = "https://sharren-tanuwijaya.github.io/PROJECTB/PROJECT-B/canada.html";
    document.body.appendChild(a3);
    a3.style.position='absolute';
    a3.style.top='237px';
    a3.style.left='695px';
  }
   
  }
  if (key == "4") {
    try{
      a1.remove();
      a2.remove();
      a3.remove();
      a5.remove();
      a6.remove();
      a7.remove();
    }
  finally{  
    
    a4=document.createElement('a')
    let linkText4 = document.createTextNode("EXPLORE HERE!");
    a4.appendChild(linkText4);
    a4.title = "EXPLORE HERE!";
    a4.href = "https://sharren-tanuwijaya.github.io/PROJECTB/PROJECT-B/italy.html";
    document.body.appendChild(a4);
    a4.style.position='absolute';
    a4.style.top='289px';
    a4.style.left='730px';
  }
   
  }
  if (key == "5") {
    try{
      a1.remove();
      a2.remove();
      a3.remove();
      a4.remove();
      a6.remove();
      a7.remove();
    }
  finally{  
    
    a5=document.createElement('a')
    let linkText5 = document.createTextNode("EXPLORE HERE!");
    a5.appendChild(linkText5);
    a5.title = "EXPLORE HERE!";
    a5.href = "https://sharren-tanuwijaya.github.io/PROJECTB/PROJECT-B/greece.html";
    document.body.appendChild(a5);
    a5.style.position='absolute';
    a5.style.top='282px';
    a5.style.left='787px';
  }
   
  }
  if (key == "6") {
    try{
      a1.remove();
      a2.remove();
      a3.remove();
      a4.remove();
      a5.remove();
      a7.remove();
    }
  finally{  
    
    a6=document.createElement('a')
    let linkText6 = document.createTextNode("EXPLORE HERE!");
    a6.appendChild(linkText6);
    a6.title = "EXPLORE HERE!";
    a6.href = "https://sharren-tanuwijaya.github.io/PROJECTB/PROJECT-B/dubai.html";
    document.body.appendChild(a6);
    a6.style.position='absolute';
    a6.style.top='325px';
    a6.style.left='872px';
  }
   
  }
  if (key == "7") {
    try{
      a1.remove();
      a2.remove();
      a3.remove();
      a4.remove();
      a5.remove();
      a6.remove();
    }
  finally{  
    
    a7=document.createElement('a')
    let linkText7 = document.createTextNode("EXPLORE HERE!");
    a7.appendChild(linkText7);
    a7.title = "EXPLORE HERE!";
    a7.href = "https://sharren-tanuwijaya.github.io/PROJECTB/PROJECT-B/norway.html";
    document.body.appendChild(a7);
    a7.style.position='absolute';
    a7.style.top='93px';
    a7.style.left='748px';
  }
   
  }
}





