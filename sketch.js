const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 500, 70, 70);
    box2 = new Box(950, 500, 70, 70);
    box3 = new Box(700, 350, 70, 70);
    box4 = new Box(950, 350, 70, 70);
    box5 = new Box(825, 250, 70, 70);

    ground = new Ground(600, 590, width, 50);

    pig1 = new Pig(825, 500);
    pig2 = new Pig(825, 350);

    log1 = new Log(825, 400, 350, PI / 2);
    log2 = new Log(825, 300, 350, PI / 2);
    log3 = new Log(750, 200, 200, PI / 7);
    log4 = new Log(850, 200, 200, -PI / 7);

    bird = new Bird(300, 200);
}

function draw() {
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();
    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();

}