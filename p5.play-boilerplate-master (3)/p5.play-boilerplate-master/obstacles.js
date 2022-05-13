function Dog(){
if(frameCount % 30 === 0){
    dog = createSprite(100,0,20,20)
    dog.x = Math.round(random(300,width-300))
    //dog.addImage();
    dog.velocityY = 5;
    dog.lifetime = width/dog.velocityY
    dog.addImage(dogimg)
    dog.scale =  0.2
    dog.debug = true
    dog.setCollider("rectangle",20,30,300,190 )
 

    dgroup.add(dog)
    

}
}

function Raccoon(){}