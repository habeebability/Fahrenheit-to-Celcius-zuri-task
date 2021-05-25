const inputValue = document.querySelector('#value');
const submitBtn = document.querySelector('#btn');
const result = document.querySelector('#result');

//get typeof inputValue
function getInputType(value) {
  if(value === "") {
    return "";
  }
  else if(value === "true" || value === "false") {
    return "boolean";
  }
  else if(!Number.isNaN(Number(value))) {
    return "number";
  }
 
  
  else {
    return typeof(value);
  }
}

//function to convert fahr to celcius
function convertFahrToCelsius(fahrenheit) {
  
  fahrenheit = inputValue.value;
  inputValue.value = "";
  
  if(!isNaN(fahrenheit)) {
    let celcius = (fahrenheit - 32) * 5 / 9 ;
    
    result.style.color = 'green';
    return result.innerText = `${fahrenheit}degF is equal to ${celcius.toFixed(4)} degC `;
  }

  else {
    result.style.color = 'red';
    return result.innerText = `${fahrenheit} is not a number but ${getInputType(fahrenheit)} ` ;
  }

  
} 

submitBtn.addEventListener('click', convertFahrToCelsius);