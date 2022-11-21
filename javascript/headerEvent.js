var first = document.getElementById("first");
first.addEventListener("click",function(){
    window.confirm("浏览器不支持自动设为首页，请手动设置");

});
function select(){
    window.confirm("无法自动添加到收藏夹，请使用CTRL + D手动添加");
};
