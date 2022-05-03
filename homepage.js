
let counter = 0;
let button = document.querySelector(".clickme");
console.log(counter);

button.addEventListener("click", addBlackBorder);

function addBlackBorder() {
    button.classList.add("black-border");
    counter++;
    console.log(counter);

    if (counter > 0) {
        button.classList.add("script-text")
        button.innerHTML = "POETRY PLAZA"
    }

    if (counter > 1) {
        button.innerHTML = "OPEN 24/7"
    }

    if (counter > 1) {
        counter = 0;
    }  
}
