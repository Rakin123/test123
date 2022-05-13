function play(){
  // background movement(up to down)
  bg.velocityY = 3
  if(bg.y>height ){
    bg.y = height/4

  }
 
  // player movement(left to right)
  // player cannot move out of the screen

  if(keyDown(LEFT_ARROW) &&  100< player.x && play){
      player.x = player.x - 7
      //console.log(player.x)
  }/*else if(width-100<player.x<100){
      player.x = player.x
  }
*/
if(keyDown(RIGHT_ARROW)&& player.x<width-100){
  player.x = player.x+7
  //console.log(player.x)
}
//score
console.log(gameState)
score = score + Math.round(getFrameRate()/60 )

  // Objects will spawn(lightning bolt and blades)
  // obstacles will spawn(dog and raccoon)
  Dog();
  if(dgroup.isTouching(player)){
console.log("true")
gameState = 1
  }
  bolt();
  if(lgroup.isTouching(player) && lflag === true){
    bar = bar + 40
    lflag = false
    lgroup.destroyEach();
    bar1.y = bar1.y - 20
  }else{
    lflag = true
  }

  if(lgroup2.isTouching(player) && lflag === true && bar <=200){
    bar = bar + 40
    lflag = false
    lgroup2.destroyEach();
    bar1.y = bar1.y - 20
  }else{
    lflag = true
  }

  if(lgroup3.isTouching(player) && lflag === true && bar<= 200){
    bar = bar + 40
    lflag = false
    lgroup3.destroyEach();
    bar1.y = bar1.y - 20
  }else{
    lflag = true
  }
  console.log(bar1)

  if(bar>200){
    bar = 200
    bar1.y = bar1.y - 20
  }

  if(isTouching(player,dgroup)){
    gameState = 1;
    
  }
  // bars will be created for the charge and sharpness of the lawn mower
  bar = bar - 0.3;
  bar3 = bar3 - 0.12;

  
  if(bar >0){
    bar1.height = bar
   bar1.y = bar1.y + 0.15
  }else if( bar <=0){
    bar1.height = 0.125
    gameState = 1
  }


  if(bar3 >0){
    bar2.height = bar3
    bar2.y = bar2.y + 0.06
  }else if( bar3 === 0 || bar3<0){
    bar2.height = 0.125
    gameState = 1
  }

  
  // bars will decrease as time goes by
  // bars lifespan will be increased if particular objects are collected
  // Three lives will be created
  // Game over if the  one of the bars if empty or if all three hearts are gone
}