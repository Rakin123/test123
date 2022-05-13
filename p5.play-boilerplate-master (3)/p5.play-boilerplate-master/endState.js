function end(){
    dgroup.destroyEach();
    bg.velocityY = 0
   endFlag = false;
   if (!endFlag){go()}

}

function go(){
    swal ({
        icon: "warning",
        title: "Game Over"
    })
}