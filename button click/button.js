let para= document.getElementById("para");
let btn= document.getElementById("btn");

var i=0;





btn.addEventListener("click", ()=>{
   i=i+1;
    
    if(i%2==0)
    {
        para.style.color="red";
        para.innerText= "The Button was clicked " + i + " times.";
        
        
         }

    else{
        para.style.color="blue";
        para.innerText= "The Button was clicked " + i + " times.";
        
       
        
    }

  
  
})

