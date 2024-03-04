function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var bloco = document.querySelector('.bloco');
var container = document.getElementById('container');

bloco.addEventListener('click', function() {
    var maxX = container.clientWidth - bloco.clientWidth;
    var maxY = container.clientHeight - bloco.clientHeight;

    var newX = getRandomNumber(0, maxX);
    var newY = getRandomNumber(0, maxY);

    bloco.style.left = newX + 'px';
    bloco.style.top = newY + 'px';
});