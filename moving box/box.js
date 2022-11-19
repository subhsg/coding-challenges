let box=document.getElementById("box");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
 
//console.dir(box);
var  move=50;
var  move1=50;
var  move2=50;
var  move3=50;

btn1.addEventListener("click", ()=> {
    
    box.style.left =   move  + "px";
    move= parseInt(box.style.left) - 50;
 })
btn2.addEventListener("click", ()=> {
    box.style.left =   move1  + "px";
    move1= parseInt(box.style.left) + 50;

})
btn3.addEventListener("click", ()=> {
    box.style.top =   move2  + "px";
    move2= parseInt(box.style.top) - 50;

})
btn4.addEventListener("click", ()=> {
    box.style.top =   move3  + "px";
    move3= parseInt(box.style.top) + 50;

})