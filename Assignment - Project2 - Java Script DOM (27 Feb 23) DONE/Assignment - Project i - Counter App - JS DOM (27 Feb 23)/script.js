let decvalue = document.getElementById("decrement");
let incvalue = document.getElementById("increment");
let resetvalue = document.getElementById("reset");
let displayvalue = document.getElementById("displayValue");

decvalue.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if (value > 0) {
        displayvalue.innerText = value - 1;
    }else{
        alert("Negative value are not Allowed")
    };
});

incvalue.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if (value >= 20) {
        alert("20+ Value are not Allowed")
    }else{
        displayvalue.innerText = value + 1;
    }
})

resetvalue.addEventListener("click", () => {
    displayvalue.innerText = 0;
})
