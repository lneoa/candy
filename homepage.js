



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
        button.innerHTML = "WORD CANDY"
    }

    if (counter > 1) {
        button.innerHTML = "A Website"
    }

    if (counter > 2) {
        button.innerHTML = "by Leona Cheung"
    }
}
