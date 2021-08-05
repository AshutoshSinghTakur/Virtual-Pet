var dog,sadDog,happyDog;
var database;
var feed
var lastFed, foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog = loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  feed= createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food");
  addFood.position(800, 95)
  addFood.mousePressed(addFoods)
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //foodObj = new Food(200,100);
  //lastFed = new Food(350,30);
  foodStock = new Food(100,100);

}

function draw() {
  background(46,139,87);

  fedTime = database.ref('FeedTime');
  fedTime.on("value", function(data){
  lastFed=data.val();
  })

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + "PM", 350, 30);
  }else if(lastFed==0){
    text("Last Feed : 12 AM", 350, 30);
  }else{
    text("Last Feed : "+ lastFed + "AM", 350, 30);
  }

  //foodObj.display();
  foodStock.display();

  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS = data.val();
  foodStock.updateFoodStock(foodS)
}

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodStock.updateFoodStock(foodStock.getFoodStock()-1);
  database.ref('/').update({
    Food: foodStock.getFoodStock(),
    FeedTime: hour()
  })
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
   })
  }

  function mousePressed(){
    foodObj.getFoodStock()-1
  }