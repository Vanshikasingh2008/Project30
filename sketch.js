const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    polygonimg = loadImage("hexagon.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1210,10);
    base = new Ground(550,350,300,10);
    base2 = new Ground(960,235,250,10);
    
    //base2 level1.
    block = new Box(960,200);
    block2 = new Box(930,200);
    block3 = new Box(900,200);
    block4 = new Box(990,200);
    block5 = new Box(1020,200);
    //base2 level2.
    block6 = new Box2(960,160);
    block7 = new Box2(930,160);
    block8 = new Box2(990,160);
    //base level3.
    block9 = new Box3(960,120);
    //base1 level1.
    block10 = new Box(550,350);
    block11 = new Box(580,350);
    block12 = new Box(520,350);
    block13 = new Box(610,350);
    block14 = new Box(490,350);
    block15 = new Box(640,350);
    block16 = new Box(460,350);
    //base1 level2.
    block17 = new Box3(550,310);
    block18 = new Box3(580,310);
    block19 = new Box3(520,310);
    block20 = new Box3(610,310);
    block21 = new Box3(490,310);
    //base1 level3.
    block22 = new Box2(550,270);
    block23 = new Box2(580,270);
    block24 = new Box2(520,270);
    //base1 level4.
    block25 = new Box4(550,230,30,40);
    console.log(block2);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(polygon,{x:100,y:200});
}

function draw(){
    background(rgb(56,44,44));
    Engine.update(engine);

    push();
    textSize(30);
    fill("white");
    text("Drag the Circle and Release it to Destroy the blocks.",200, 50);
    pop();

    //imageMode(CENTER);
    //image(polygonimg,polygon.position.x,polygon.position.y,40,40);

    /*if(block10.speed<5){
        block.display();
        World.remove(world,block10);
    }
    if(block11.speed<5){
        block2.display();
        World.remove(world,block11);
    }
    if(block12.speed<5){
        block3.display();
        World.remove(world,block12);
    }
    if(block13.speed<5){
        block4.display();
        World.remove(world,block13);
    }
    if(block14.speed<5){
        block5.display();
        World.remove(world,block14);
    }*/

    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();;
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    base.display();
    base2.display();
    ground.display();
    slingshot.display();

   /* block.visibility();
    block2.visibility();
    block3.visibility();
    block4.visibility();
    block5.visibility();*/

    ellipseMode(RADIUS);
    ellipse(polygon.position.x,polygon.position.y,20);

    //keyPressed();
    //mouseDragged();
   // mouseReleased();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    console.log(polygon);
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon);
    }
}