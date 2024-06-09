let keys = document.querySelectorAll(".key");
let display = document.querySelector(".display");
let AC = document.querySelector(".AC");
let DEL = document.querySelector(".DEL");
let refresh = false;

DEL.addEventListener("click", () => {
    display.innerText = display.innerText.slice(0, display.innerText.length - 1);
})
AC.addEventListener("click", () => {
    display.innerText = "";
})
keys.forEach((key) => {
    key.addEventListener("click", () => {
        displayValue(key);
    })
})

let displayValue = (key) => {
    if (refresh === true) {
        display.innerText = "";
        refresh = false;
    }
    if (key.innerText === "=") {
        calculate(display.innerText);
    }
    if(key.innerText!= '=') {
        display.innerText += key.innerText;
    }
}
let calculate = (exp) => {
    display.innerText = eval(exp);
    refresh = true; 
}