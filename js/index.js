const inputValue = document.querySelector('#value');
const submitBtn = document.querySelector('#btn');
const result = document.querySelector('#result');
// const isNumber = true;


function convertFahrToCelsius(fahrenheit) {
  
  fahrenheit = inputValue.value;
  
  if(!isNaN(fahrenheit)) {
    let celcius = (fahrenheit - 32) * 5 / 9;
    return result.innerText = `${celcius.toFixed(4)}`;
  }

  else {
    return result.innerText = `${fahrenheit} is not a number but ${typeof(fahrenheit)} ` ;
  }
} 

submitBtn.addEventListener('click', convertFahrToCelsius);