let date = new Date();
      let Week = ['日','一','二','三','四','五','六'];  
      let str =date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日"+"  "+"星期"+Week[date.getDay()];
      document.getElementById("time").innerHTML=str;