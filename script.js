const display=document.getElementById("display");

function ToDisplay(input) {
    if (display.value === "Syntax Error") {
        display.value = "";
    }

    display.value += input;
}
function Calculate() {
    try{
        display.value=eval(display.value);   
    }
    catch(error){
        display.value="Syntax Error"
    }
}
function ToClear() {
    display.value="";
}