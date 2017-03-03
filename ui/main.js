console.log('Loaded!');

//change the text of main-text dive
var element = document.getElementById('main-text');
element.innerHTML="Things are getting clear by time :P";

//make an element move
var img = document.getElementById('img');
img.onclick = function() {
    img.style.marginLeft = '100px';
};