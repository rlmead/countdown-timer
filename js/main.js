// define a few constants and variables
const counter = document.getElementById('counter');
const button = document.querySelector('button');
let date_input = document.querySelector('input[type="date"]');
date_input.value = '2020-12-11';

button.onclick = function() {
    ms_left = Date.parse(date_input.value) - Date.now();
    console.log(ms_left);
}
