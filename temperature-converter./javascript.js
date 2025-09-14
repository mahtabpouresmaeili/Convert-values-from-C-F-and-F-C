let title = document.querySelector('.title');
let firstValue = document.querySelector('.firstValue');
let secondValue = document.querySelector('.secondValue');

let inputLabel = document.querySelector('.input-label');
let inputField = document.querySelector('.input-field');

let result = document.querySelector('.result');

let btnConvert = document.querySelector('.convert');
let btnRest = document.querySelector('.reset');
let btnChange = document.querySelector('.change');

//convert button
btnConvert.addEventListener('click', function () {
  if (firstValue.innerHTML === '°C') {
    // Celsius → Fahrenheit
    result.innerHTML = (inputField.value * 9) / 5 + 32 + ' °F';
  } else {
    // Fahrenheit → Celsius
    result.innerHTML = ((inputField.value - 32) * 5) / 9 + ' °C';
  }
});

//rest button

btnRest.addEventListener('click', function (){
    inputField.value = ""
    result.innerHTML = ""
})

// Change button
btnChange.addEventListener('click', function () {
  if (firstValue.innerHTML === '°C') {
    firstValue.innerHTML = '°F';
    secondValue.innerHTML = '°C';
    title.innerHTML = 'Converter °F to °C';
    rest()
  } else {
    firstValue.innerHTML = '°C';
    secondValue.innerHTML = '°F';
    title.innerHTML = 'Converter °C to °F';
    rest()
  }
})