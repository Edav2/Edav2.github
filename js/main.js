// This function clears all the value
function clearScreen(){
   document.getElementById("result").value ="";
}


// This function displays value 
function display (value) {
   document.getElementById("result").value +=value;

}

// This function calculates the value 
function calculate(){
   var p = document.getElementById("result").value;
   var q =eval(p);
   document.getElementById("result").value =q;
}