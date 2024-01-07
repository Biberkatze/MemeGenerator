var memeImage = document.getElementById('meme-image');
var textInput = document.getElementById('text-input');
document.querySelector('button').addEventListener('click', function () {
    generateMeme();
});
function editMeme(imagePath) {
    var memeImage = document.getElementById('meme-image');
    var textOverlay = document.getElementById('text-overlay');
    //hier werden die Bilder Abgerufen
    memeImage.src = imagePath;
    textOverlay.textContent = ''; // Zurücksetzen des Text-Overlays
}
function generateMeme() {
    var memeImage = document.getElementById('meme-image');
    var textInput = document.getElementById('text-input').value;
    var textOverlay = document.getElementById('text-overlay');
    //Hier sind die Aktionen, welche man machen kann.
    textOverlay.textContent = textInput;
}
function changeColor(color) {
    var textOverlay = document.getElementById('text-overlay');
    
    switch (color) {
        case 'black':
            textOverlay.style.color = 'black';
            break;
        case 'white':
            textOverlay.style.color = 'white';
            break;
        case 'red':
            textOverlay.style.color = 'red';
            break;
        //Hier wird die Schriftfarbe dargestellt. man kann auch mehr hinzufügen.
    }
}