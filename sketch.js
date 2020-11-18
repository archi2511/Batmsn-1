const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rain=[];
var umbrella;
var man1,man2,man3;
var man4,man5,man6;
var man7,man8;

function preload(){
    
}

function setup(){
   createCanvas(480,650);
   engine = Engine.create();
   world = engine.world;
  

   var maxDrops = 100;
   for(var i=0; i<maxDrops; i++){
      rain.push(new Drop(random(0,400), random(0,400)))
   }
   
   //umbrella = new Umbrella1(240,300);
   Engine.run(engine);
}

function draw(){
   background(0);
   for(var i=0; i<100; i++){
      rain[i].display();
      rain[i].updateDrop();
   }
   // umbrella.display();
   drawSprites();
}   

