class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Images/Milk.png');
    }
   
   getFedTime(lastFed){
     this.lastFed=lastFed;
   }
   
   updateFoodStock(foodStock){
   this.foodStock=foodStock;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=100; 

      imageMode(CENTER);
      image(this.image,730,220,60,60);

      console.log(foodStock);
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x = 80;
            y = y+ 60;
          }
          image(this.image,x,y,60,60);
          x = x+ 30;
        }
      }
    }
}
