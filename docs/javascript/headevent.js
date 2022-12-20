function index(){
    alert("浏览器不支持自动设为首页，请手动设置");
}
let shou = document.getElementById("index");
shou.addEventListener("click",index);

function chou(){
    alert("无法自动添加到收藏夹，请使用CTRL + D手动添加");
}
let chou1 = document.getElementById("chou");
chou1.addEventListener("click",chou);