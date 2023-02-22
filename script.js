window.onload = function() {
    const calculator = document.getElementById("calculator");
    const displayInput = document.getElementById("display");
  
    calculator.addEventListener("click", function(event) {
      const clickedButton = event.target;
      if (clickedButton.tagName === "INPUT") {
        const buttonValue = clickedButton.value;
        switch (buttonValue) {
          case "AC":
            clearAll();
            break;
          case "DE":
            de();
            break;
          case "=":
            calculate();
            break;
          default:
            updateDisplayInput(buttonValue);
        }
      }
    });
  
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