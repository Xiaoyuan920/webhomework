let bot = document.getElementById("fig1");
let cen = document.getElementById("fig2");
let before = document.getElementsByClassName("before");
let after = document.getElementsByClassName("after");
var count=0;
before[0].addEventListener("click",function(){
    if(count>4){
        count=0;
        cen.style.marginLeft=-1200*count+"px";
        bot.style.marginLeft=-1200*count+"px";
    }else{
        count+=1;
        cen.style.marginLeft=-1200*count+"px";
        bot.style.marginLeft=-1200*count+"px";
    }
});
after[0].addEventListener("click",function(){
    if(count<=0){
        count=5;
        cen.style.marginLeft=-1200*count+"px";
        bot.style.marginLeft=-1200*count+"px";
    }else{
        count-=1;
        cen.style.marginLeft=-1200*count+"px";
        bot.style.marginLeft=-1200*count+"px";
    }
});
// 定时轮播
run();
function run (){
    if(count>4){
        count=0;
        cen.style.marginLeft=-1200*count+"px";
        bot.style.marginLeft=-1200*count+"px";
    }else{
        count+=1;
        cen.style.marginLeft=-1200*count+"px";
        bot.style.marginLeft=-1200*count+"px";
    }
    setTimeout(run,1500);
}