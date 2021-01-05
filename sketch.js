const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, platform1, platform2;
var polygon, sling;

var block01, block02, block03, block04, block05, block06, block07;
var block08, block09, block10, block11, block12, block13, block14, block15, block16;

var block17, block18, block19, block20, block21, block22, block23, block24, block25;
var block;
var score = 0;
var bg;

function preload(){
    // bgColor()
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;    

    ground = new Ground(width/2, height, width, 5);
    platform1 = new Ground(335,300,300,10);
    platform2 = new Ground(700,200,300,10);

    polygon = new Shape(100,200,40,40);
    sling = new Sling(polygon.body, {x: 100, y:200});

    //first pyramid

    
    block01 = new Box(215,280,40,40);
    block02 = new Box(255,280,40,40);
    block03 = new Box(295,280,40,40);
    block04 = new Box(335,280,40,40);
    block05 = new Box(375,280,40,40);
    block06 = new Box(415,280,40,40);
    block07 = new Box(455,280,40,40);

    
    block08 = new Box(255,240,40,40);
    block09 = new Box(295,240,40,40);
    block10 = new Box(335,240,40,40);
    block11 = new Box(375,240,40,40);
    block12 = new Box(415,240,40,40);

    //fill("lighYellow");
    block13 = new Box(295,200,40,40);
    block14 = new Box(335,200,40,40);
    block15 = new Box(375,200,40,40);
    block15.score();

    //fill("lighGreen");
    block16 = new Box(335,160,40,40);
    block16.score();

    //second pyramid

    block = new Box(660,180,40,40);
    block.score();

    block17 = new Box(620,180,40,40);
    block17.score();
    //block18 = new Box(660,100,40,40);
    block19 = new Box(700,180,40,40);
    block19.score();
    block20 = new Box(740,180,40,40);
    block20.score();
    block21 = new Box(780,180,40,40);
    block21.score();

    block25 = new Box(660,140,40,40);
    block25.score();
    block22 = new Box(700,140,40,40);
    block22.score();
    block23 = new Box(740,140,40,40);
    block23.score();

    block24 = new Box(700,100,40,40);
    block24.score();



}

function draw(){
    // if(bg){
    //     background(bg);
    // }

    background("black");
    
    Engine.update(engine);

    noStroke();
    textSize(20);
    fill("lightBlue");
    text("SCORE : " + score, width-300, 50);

    platform1.display();
    platform2.display();
    polygon.display();
    sling.display();

    fill("lightBlue");
    block01.display();
    block01.score();
    block02.display();
    block02.score();
    block03.display();
    block03.score();
    block04.display();
    block04.score();
    block05.display();
    block05.score();
    block06.display();
    block06.score();
    block07.display();
    block07.score();

    fill("lightPink");
    block08.display();
    block08.score();
    block09.display();
    block09.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();

    fill("lightYellow");
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();

    fill("lightGreen");
    block16.display();
    block16.score();

    fill("lightPink");
    block17.display();
    block17.score();
    //block18.diaplay();
    block19.display();
    block19.score();
    block20.display();
    block20.score();
    block21.display();
    block21.score();
    block.display();
    block.score();
    
    fill("lightBlue");
    block23.display();
    block23.score();
    block25.display();
    block25.score();
    block22.display();
    block22.score();

    

    fill("lightGreen");
    block24.display();
    block24.score();
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY});
}

function mouseReleased(){
    
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon.body);
        
    }
}

async function bgColor(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg = "white";
        
    }
    else{
        bg = "black";
        
    }
}
