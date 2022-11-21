var car = document.getElementById("car");
let left=0;
run();
function run (){
    car.style.marginLeft = left + "px";
    if(left<=0&&left>=-335){
        left-=335;
    }else{
        left+=335;
    }
    setTimeout(run,2000);
}


