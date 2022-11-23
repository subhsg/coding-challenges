let btn = document.getElementsByClassName('btn');


let displayElement = document.getElementsByClassName('display')[0];



// eventListener

document.addEventListener('click', (e) => {
    let txt = e.target.innerText;
    
    if (e.target.classList.contains("btn")) {

        if (txt === "=") {
            if(displayElement.innerText.endsWith("+")||displayElement.innerText.endsWith("-")||displayElement.innerText.endsWith("*")||displayElement.innerText.endsWith("/")){
                displayElement.innerText="Enter another number first"
                displayElement.classList.add('font-size');
                displayElement.classList.remove('answer');
                
            }
        
            
            
            
            operation();

        } 
        else if(txt==="C"){
            erase();
        displayElement.classList.add('font-size');
        displayElement.classList.remove('answer');
        }
        else if (displayElement.innerText.charAt(0)==="+"||displayElement.innerText.charAt(0)==="-"||displayElement.innerText.charAt(0)==="*"|| displayElement.innerText.charAt(0)==="/"){
            displayElement.innerText="Enter a number first"
            displayElement.classList.add('font-size');
            displayElement.classList.remove('answer');
        }
        

        
        else {
            display(txt);
            displayElement.classList.add('font-size');
            displayElement.classList.remove('answer');

        }
    }
})

// function for mathemetical operations

function operation() {

    let answer = eval(displayElement.innerText);
   
    
    erase();

    if(!isFinite(answer)){
        
         window.alert("Please give Valid Values.");
    }
    // else if (displayElement.innerText.charAt(0)==="+"){
    //           console.log("invalid");
    // }
    else{
        let str= answer.toString();
        if(str.includes(".")){
            if(str.length>="8"){
                

                answer=answer.toFixed(8);
                answer=parseFloat(answer);
            }
        }
        
        display(answer);
        
        displayElement.classList.remove('font-size');
        displayElement.classList.add('answer');
        

        

    }


}

//function for displaying

function display(txt) {
    displayElement.innerText += txt;

}

//function to erase

function erase(){
    displayElement.innerText = "";
}
