var list=document.getElementById("list");
var text=document.getElementById("text");
var btn=document.getElementById("btn");
var date=document.getElementById("date");
var main=document.getElementById("main");

const d = new Date();
date.innerHTML= d;

btn.addEventListener("click",()=> {
    var div=document.createElement('div');
    
    var para=document.createElement('p');

    var remove=document.createElement('button');
    remove.setAttribute("class","remove");
    var done=document.createElement('button');
    done.setAttribute("class","done");
    div.setAttribute("class","div");
    remove.setAttribute("label","remove")
    remove.innerHTML="Remove";
    done.innerHTML="Done";

    

    para.innerHTML= text.value;
    list.append(div);
    div.append(para,remove,done);
    
   
    text.value=""; 
     

    remove.addEventListener("click", ()=>{
        div.innerHTML="";

    })

    done.addEventListener("click", ()=>{
        
        para.style.textDecoration="line-through";
        
        done.disabled=true;
        
    })
    

    
} )