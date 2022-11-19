var img=document.getElementById("img");
var btn=document.getElementById("btn");
var on= false;



btn.addEventListener("click", ()=>{
    on=!on;
    // if(!on){
    //     img.src="off.jpg";
    // }
    // else
    // {
    //     img.src="on.jpg";
    // }
  img.src=on?"on.jpg":"off.jpg";
})

