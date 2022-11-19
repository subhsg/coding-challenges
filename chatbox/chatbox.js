const container= document.getElementById("container");
var message= document.getElementById("message");
let btn=document.getElementById("btn");



btn.addEventListener("click",()=> {
    
    var para=document.createElement('p');
    para.innerText=message.value;
    container.append(para);
    console.log(para);
    message.value="";
    

})


