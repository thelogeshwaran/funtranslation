var input= document.querySelector("#inputTxt");
var buttonTrans = document.querySelector("#button");
var output = document.querySelector("#outputTxt");

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"


function getUrl(txtFrurl){
    return serverUrl + "?" + "text=" + txtFrurl
}


function clickHandler(){

    var inputval = input.value

    fetch(getUrl(inputval))
    .then(response => response.json())
    .then(json => { 
        output.innerText = json.contents.translated;
    })
    


}


buttonTrans.addEventListener("click", clickHandler)