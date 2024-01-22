var slide=1;
move(slide);
function moves(n){
    move(slide+=n);
}
function move(n){
var step = document.getElementsByClassName("mySlides");
if(n>step.length){
slide=1;
}
if(n<1){
    slide=step.length;
}
for(var i=0;i<step.length;i++){
    step[i].style.display="none";
}
step[slide-1].style.display="block";
}