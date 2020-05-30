var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;


function setup() {
	createCanvas(800, 700);

	bobObject1 = new bobObject1(300,500,50,50);
	bobObject2 = new bobObject2(350,500,50,50);
	bobObject3 = new bobObject3(400,500,50,50);
	bobObject4 = new bobObject4(450,500,50,50);
	bobObject5 = new bobObject5(500,500,50,50);

	engine = Engine.create();
	world = engine.world;

		Engine.run(engine);
  
}


function draw() {
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}



