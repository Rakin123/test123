function bolt(){
    if(frameCount % 20 === 0){
        light1 = createSprite(100,0,20,20)
        light1.x = Math.round(random(300,width-300))
        //dog.addImage();
        light1.velocityY = 5;
       light1.lifetime = width/light1.velocityY
        light1.addImage(thunder)
        light1.scale =  0.06
        light1.debug = true
        //light1.setCollider("rectangle",20,30,300,190 )
     
    
        lgroup.add(light1)
        
    }
    if(frameCount % 25 === 0){
        light2 = createSprite(100,0,20,20)
        light2.x = Math.round(random(300,width-300))
        //dog.addImage();
        light2.velocityY = 5;
       light2.lifetime = width/light2.velocityY
        light2.addImage(thunder)
        light2.scale =  0.06
        light2.debug = true
        //light1.setCollider("rectangle",20,30,300,190 )
     
    
        lgroup2.add(light2)
        
    }
    if(frameCount % 85 === 0){
        light3 = createSprite(100,0,20,20)
        light3.x = Math.round(random(300,width-300))
        //dog.addImage();
        light3.velocityY = 5;
       light3.lifetime = width/light3.velocityY
        light3.addImage(thunder)
        light3.scale =  0.06
        light3.debug = true
        //light1.setCollider("rectangle",20,30,300,190 )
     
    
        lgroup3.add(light3)
        
    }
    
}