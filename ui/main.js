console.log('Loaded!');

//change the text of main-text dive
var element = document.getElementById('main-text');
element.innerHTML="Things are getting clear by time :P";

//make an element move
var img = document.getElementById('img');

var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setinterval(moveRight, 50);
    //img.style.marginLeft = '100px';
};