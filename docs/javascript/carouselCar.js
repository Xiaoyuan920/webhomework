var car = document.getElementById("car");
let left=0;
runcar();
function runcar (){
    car.style.marginLeft = left + "px";
    if(left<=0&&left>=-308){
        left-=308;
    }else{
        left+=616;
    }
    setTimeout(runcar,2000);
}