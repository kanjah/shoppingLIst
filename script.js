var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght(){
    return input.value.length;
}

function creatListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

button.addEventListener("click", function(){
    if(inputLenght > 0){
        creatListElement();
    }
});

input.addEventListener("keypress", function(e){
    if(inputLenght > 0 && e.keyCode === 13){
        creatListElement();
    }

});