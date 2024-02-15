let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById('wordsContainer');
let userInput = document.getElementById('userInput');
let errorMsg = document.getElementById('errorMsg');


function addRandomFont() {
    let number = Math.ceil(Math.random() * 40)
    let pixels = number + 'px';
    console.log(pixels);
    let userInputValue = userInput.value;

    if (userInputValue === "") {
        errorMsg.textContent = 'please enter valid one';
        return;
    }
    let span = document.createElement('span');
    span.style.fontSize = pixels;
    span.textContent = userInputValue;
    wordsContainer.appendChild(span);

    userInput.value = ""

}