var cat, cat_running, cat_jumpping;
var ground, invisibleGround, groundImage;
var ground2;

function preload() {
  
  cat_running = loadAnimation("gato1.png", "gato2.png", "gato3.png");
  cat_jumpping =loadAnimation("pulo1.png","pulo2.png","pulo2.png","pulo1.png","pulo2.png","pulo2.png")
  groundImage = loadImage("cenario.png");

}

function setup() {
  createCanvas(800, 400)
  ground = createSprite(200, 180, 800, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -1;
  ground2 = createSprite(width, 180, 800, 20);
 ground2.velocityX=-1
  ground2.addImage("ground", groundImage);
 
  
  cat = createSprite(50, 370, 20, 50)
  cat.addAnimation("running", cat_running);
  cat.addAnimation("jump",cat_jumpping)
  cat.scale = 0.5;
  console.log("teste")
  //crie sprite ground (solo)
  

  //crie um solo invisível
  invisibleGround = createSprite(200, 370, 400, 10);
  invisibleGround.visible = false;


}

function draw() {
  //definir cor do plano de fundo
  background(220);



  // pulando o trex ao pressionar a tecla de espaço
  if (keyDown("space") && cat.y >= 290) {
  cat.velocityY = -10;
  cat.changeAnimation("jump")
  }
else{
   cat.changeAnimation("running")
}
  cat.velocityY = cat.velocityY + 0.8

  if (ground.x < 20) {
    ground.x = width;
    
  }

  if(ground2.x<20){
    ground2.x=width
  }
  //impedir que o trex caia
  cat.collide(invisibleGround);


  drawSprites();

}