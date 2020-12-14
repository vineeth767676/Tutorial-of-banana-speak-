// Declaring the variables of input & processing & output

var inputText = document.querySelector("inputBox");
var buttonListner = document.querySelector("translateButton");
var outputText = document.querySelector("outputBox")

// Translator URL link

var serverURL = "https://api.funtranslations.com/translate/minion.json"

// function taking the input

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

// what if server is busy

function errorHandler(error) {
    console.log("error occured", error);
    alert("ooopsss!!!! Try again after sometime")
}

// after clicking the translation button

function clickHandler() {
    var inputT = inputText.value; //taking input

    // calling server for processing

    fetch(getTranslationURL(inputT))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText; //output

         })
        .catch(errorHandler)    
};

buttonListner.addEventListener("click", clickHandler)