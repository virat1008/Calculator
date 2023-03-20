var heading = document.getElementById("heading");
var buttons = document.getElementsByClassName("buttons");
var operand1 = 0;
var operand2 = null;
var operator = null;

// Input through Calculator buttons

for(var i = 0; i< buttons.length ; i++){
    buttons[i].addEventListener("click", function (){
        var value = this.getAttribute('data-value');

        if(value == 'reset') {
            heading.innerText = null;
        }

        else if(value == '+' || value == '-' || value == "*" || value == "/" || value == "%"){
        
                operator = value;
                operand1 = parseFloat(heading.innerText);
                console.log("opera 1 = ",operand1);
                heading.innerText = null;
        }

        else if(value == '='){            
            if(operator != null){
                operand2 = parseFloat(heading.innerText);
                heading.innerText = eval(operand1+" "+operator+" "+operand2);
            }
            else{
                heading.innerText = "Error";
            }
        }

        else if(value == 'sign'){
            heading.innerText = eval(parseFloat(heading.innerText) * (-1) );
        }

        else if(value == '.') {
            if(heading.innerText.length && !heading.innerText.includes('.') ) {
                heading.innerText += value;
            }
        }
        else{
            heading.innerText += value;
        }

    });
}



document.addEventListener("keypress", function(event) {
    var key;
    key =  event.keyCode;
    value = String.fromCharCode(key);
    console.log(key+" "+value);
    var numArray = [1,2,3,4,5,6,7,8,9,0];


    if(value == '+' || value == '-' || value == "*" || value == "/" || value == "%"){
    
            operator = value;
            operand1 = parseFloat(heading.innerText);
            heading.innerText = null;
    }

    else if(key == '13'){
        if(operator != null){
            operand2 = parseFloat(heading.innerText);
            heading.innerText = eval(operand1+" "+operator+" "+operand2);
        }
        else{
            heading.innerText = "Error";
        }
    }

    else if(value == '.') {
        if(heading.innerText.length && !heading.innerText.includes('.') ) {
            heading.innerText += value;
        }
    }

    else if(value in numArray){
        heading.innerText += value;
    }
})
 

document.addEventListener("keydown", function(event) {
    var key;
    key =  event.keyCode;

    if(key == '8') {
        heading.innerText = null;
    }
});