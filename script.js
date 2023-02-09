window.onload = function() {
    const equalsBtn = document.getElementById("equals");
    const displayInput = document.getElementById("display");

    const clear = document.getElementById("clear");
    const del = document.getElementById("delete");
    const period = document.getElementById("period");
    const divide = document.getElementById("divide");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    const multiply = document.getElementById("multiply");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six= document.getElementById("six");
    const subtract = document.getElementById("subtract");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const add = document.getElementById("add");
    const doublezero = document.getElementById("doublezero");
    const zero = document.getElementById("zero");

    equalsBtn.onclick = function() {calculate()};
    clear.onclick = function() {clearAll()};
    del.onclick = function() {de()};

    period.onclick = function() {updateDisplayInput(period.value)};
    divide.onclick = function() {updateDisplayInput(divide.value)};;
    seven.onclick = function() {updateDisplayInput(seven.value)};;
    eight.onclick = function() {updateDisplayInput(eight.value)};;
    nine.onclick = function() {updateDisplayInput(nine.value)};;
    multiply.onclick = function() {updateDisplayInput(multiply.value)};;
    four.onclick = function() {updateDisplayInput(four.value)};;
    five.onclick = function() {updateDisplayInput(five.value)};;
    six.onclick = function() {updateDisplayInput(six.value)};;
    subtract.onclick = function() {updateDisplayInput(subtract.value)};;
    one.onclick = function() {updateDisplayInput(one.value)};;
    two.onclick = function() {updateDisplayInput(two.value)};;
    three.onclick = function() {updateDisplayInput(three.value)};;
    add.onclick = function() {updateDisplayInput(add.value)};;
    doublezero.onclick = function() {updateDisplayInput(doublezero.value)};;
    zero.onclick = function() {updateDisplayInput(zero.value)};;
    
    function updateDisplayInput(input){
        displayInput.value += input;
    }

    function calculate(){
        if(displayInput.value == ""){
            return null;
        } else {
            displayInput.value = eval(displayInput.value);
        }
    }

    function clearAll(){
        displayInput.value = "";
    }

    function de(){
        displayInput.value = displayInput.value.substring(0, displayInput.value.length - 1);
    }
};
