// define a few constants and variables
const counter = document.getElementById('counter');
const button = document.querySelector('button');
let date_input = document.querySelector('input[type="date"]');
date_input.value = '2020-12-11';

let running_counter;

// set the timer going with the button
button.onclick = function () {
    if (button.textContent === 'start') {
    ms_left = Date.parse(date_input.value) - Date.now();
    let time_left = convert_ms(ms_left);
    button.textContent = 'stop';
    counter.textContent = time_left;
    running_counter = setInterval(function () {
        let time_left = convert_ms(ms_left);
        counter.textContent = time_left;
        ms_left -= 1000;
     }, 1000);
    } else {
        clearInterval(running_counter);
        button.textContent = 'start';
        counter.textContent = '00:00:00:00';
    }
}

// define zero-padding function to keep the counter segments consistent widths
function zero_pad(input_string, desired_length) {
    let output_string = input_string;
    while (output_string.length < desired_length) {
        output_string = '0' + output_string;
    }
    return output_string;
}

// create object to loop through for converting ms to a nice string
let ms_conversion = {
    d: 86400000,
    h: 3600000,
    m: 60000,
    s: 1000
}

// convert ms time difference to a lovely, readable string
function convert_ms(ms) {
    let time_left = '';
    for (k in ms_conversion) {
        time_left += zero_pad(Math.floor(ms / ms_conversion[k]).toString(),2);
        if (k !== 's') {
            time_left += ':';
        }
        ms = ms % ms_conversion[k];
    }
    return time_left;
}