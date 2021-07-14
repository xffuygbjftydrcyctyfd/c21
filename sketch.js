const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var b1;
var b2;
var b3;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball_options={
    restitution:1,
    frictionAir:0.01,
    density:0.03,
    friction:0.06
  }
  ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  b1=createImg("push.png");
  b1.position(220,30);
  b1.size(20,20);
  b1.mouseClicked(pforce);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20);
}
function pforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:0});
}

