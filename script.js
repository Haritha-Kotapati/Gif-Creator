
var gif = new GIF({
    workers: 2,
    quality: 10
});

var gif1 = new GIF({
    workers: 2,
    quality: 10
});

var colors = {
    square1: null,
    square2: null,
    square3: null
};

var isRendering = false;

function openColorPicker(squareId) {
    var colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.addEventListener('change', function () {
        setColor(squareId, colorPicker.value);
    });
    colorPicker.click();
}

function setColor(squareId, color) {
    colors[squareId] = color;
    document.getElementById(squareId).style.backgroundColor = color;
}

function saveAsGif() {

    previewGif();

    gif = new GIF({
        workers: 2,
        quality: 10
    });

    var square1 = document.getElementById('square1');
    var square2 = document.getElementById('square2');
    var square3 = document.getElementById('square3');

    html2canvas(square1).then(function (canvas1) {
        gif.addFrame(canvas1, { delay: 200 });

        html2canvas(square2).then(function (canvas2) {
            gif.addFrame(canvas2, { delay: 200 });

            html2canvas(square3).then(function (canvas3) {
                gif.addFrame(canvas3, { delay: 200 });

                gif.on('finished', function (blob) {
                    var downloadLink = document.getElementById('download-link');
                    downloadLink.href = URL.createObjectURL(blob);
                    downloadLink.download = 'squares.gif';
                    downloadLink.style.display = 'block';
                });

                gif.render();
            });
        });
    });
}

function previewGif() {
    gif1 = new GIF({
        workers: 2,
        quality: 10
    });

    var square1 = document.getElementById('square1');
    var square2 = document.getElementById('square2');
    var square3 = document.getElementById('square3');

    var gifPreview = document.getElementById('gif-preview');
    gifPreview.innerHTML = '';

    html2canvas(square1).then(function (canvas1) {
        gif1.addFrame(canvas1, { delay: 200 });

        html2canvas(square2).then(function (canvas2) {
            gif1.addFrame(canvas2, { delay: 200 });

            html2canvas(square3).then(function (canvas3) {
                gif1.addFrame(canvas3, { delay: 200 });

                gif1.on('finished', function (blob) {
                    var img = document.createElement('img');
                    img.src = URL.createObjectURL(blob);
                    gifPreview.appendChild(img);
                });

                gif1.render();
            });
        });
    });

}
