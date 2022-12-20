let nav = document.getElementById("nav_center");
let array = nav.getElementsByTagName("li");
let atag = array[0].getElementsByTagName("a")[0];
for(var index=1;index<array.length;index++){
     array[index].onmouseover=function(){
        atag.style.backgroundColor="#ebebeb";
        atag.style.color="#404040";
    }
    array[index].onmouseout=function(){
        atag.style.backgroundColor="";
        atag.style.color="";
    }
}