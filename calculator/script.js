let btn = document.getElementsByClassName('btn');

let displayElement = document.getElementsByClassName('display')[0];

// eventListener

document.addEventListener('click', (e) => {
    let txt = e.target.innerText;
    if (e.target.classList.contains("btn")) {

        if (txt === "=") {

            operation();

        } 
        else if(txt==="C"){
            erase();
        }
        else {
            display(txt);

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
    else{

        display(answer);
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