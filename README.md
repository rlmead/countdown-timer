# Countdown Timer
Project for Awesome Inc Bootcamp Prework Week 4

## Pseudocode

### HTML

```
<head>
    import all the necessary things
</head>
<body>
    <form>
        <input type="date"></input>
    </form>
    <button>start counter</button>
    <div id='counter'>HH:MM:SS:MS</div>
</body>
```

### CSS

```
#counter {
    light gray background
    mono font
    fit div to numbers
    center div on page
}
```

### JS

```
const counter = html element with counter id
let button = html button element
button.onclick = function {
    get user date_input
    countdown(date_input)
}

let ms_conversion = {
    da: 86400000;
    hr: 3600000;
    mn: 60000;
    sc: 1000;
    ms: 1
}

let function convert_ms(ms) {
    use the ms_conversion object to convert ms to day:hour:minute:second time
}

let ms_left = Date.now() - date_input;

setInterval(function (ms_left) {
    let time_left = convert_ms(ms_left);
    counter.textContent = time_left;
    ms_left--;
 }, 1)
```