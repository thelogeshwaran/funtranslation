var input= document.querySelector("#inputTxt");
var buttonTrans = document.querySelector("#button");
var output = document.querySelector("#outputTxt");

/** var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" **/

var serverUrl="https://api.funtranslations.com/translate/navi.json"


function getUrl(txtFrurl){
    return serverUrl + "?" + "text=" + txtFrurl
}


function clickHandler(){

    var inputval = input.value;

    fetch(getUrl(inputval))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText; 
           })
        .catch(errorHandler)
};


    




function errorHandler(error){
    console.log(error)
    alert("Something wrong in the server .Please try again")
}

buttonTrans.addEventListener("click", clickHandler)