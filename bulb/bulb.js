var img=document.getElementById("img");
var on=document.getElementById("on");
var off=document.getElementById("off");

on.addEventListener("click", ()=>{
    console.log("clicked");

    img.src="on.jpg";
})

off.addEventListener("click", ()=>{
    console.log("clicked");
    img.src="off.jpg";
})