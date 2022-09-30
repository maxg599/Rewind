//GET STRING FROM THE PAGE//
function getValue(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}


//REVERSE THE STRING//
function reverseString(userString){
    let revString = [];



    for (let index = userString.length -1; index >= 0; index--) {
       revString += userString[index];        
    }

    return revString;
}



//DISPLAY THE REVERSED STRING TO THE USER//
function displayString(reverseString){
    document.getElementById("msg").innerHTML = `Your String Reversed is: ${reverseString}`
    document.getElementById("alert").classList.remove("invisible");
}