
//OPEN SELECTED PATTERN
function openTab(evt, tabName) {
    var i, tabContent, tablink;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-content");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");

    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//DEFAULT SELECTION
document.getElementsByClassName("tab")[0].click();

//FILL COLOR
function changeColor(squareId) {
    var color = document.getElementById("color-picker-" + squareId.slice(-1)).value;
    document.getElementById(squareId).style.backgroundColor = color;
}

//Name squares
const squares = [
    document.getElementById("square-1"),
    document.getElementById("square-2"),
    document.getElementById("square-3")
];
console.log(squares);

function squaresToGif(squares, previewId){

    if(!Array.isArray(squares)){
        console.log("squares is not an array");
        return;
    }

    const gif = new GIF({
        workers: 2,
        quality: 10,
        width: 200,
        height: 200
    });
    console.log(typeof squares);
    console.log(squares);

    for(const square of squares){
        const canvas = square.canvas;

        if(canvas && canvas.width){
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            console.log(canvas);
            gif.addFrame(canvas, {copy : true, delay:200});
        }
    }


    gif.on("finished", function(blob){
        const newImg = document.createElement("img");
        const url = URL.createObjectURL(blob);

        newImg.onload = () =>{
            URL.revokeObjectURL(url);
        };

        newImg.src = url;
        document.getElementById(previewId).appendChild(newImg);
    });

    gif.render();
    console.log(gif);
}

const preview = document.getElementById("previewBtn");

preview.addEventListener("click", () => {
    squaresToGif(squares, "gif-preview")
});




// select all square elements
//const squares = document.querySelectorAll('.square');

// loop through each square and add click event listener
// squares.forEach(square => {
//   square.addEventListener('click', () => {
//     // change the background color of the square element
//     square.style.backgroundColor = 'red';
//   });
// });

// //First, add an event listener to each square:
// const squares = document.querySelectorAll('.square');

// squares.forEach(square => {
//   square.addEventListener('click', openColorPicker);
// });

// //In the openColorPicker function, create a new input element with type color. This will create a color picker dialog that the user can interact with.
// function openColorPicker(event) {
//     const colorPicker = document.createElement('input');
//     colorPicker.type = 'color';
//     colorPicker.addEventListener('change', setColor);
    
//     // Add the color picker to the document
//     document.body.appendChild(colorPicker);
    
//     // Position the color picker next to the clicked square
//     const rect = event.target.getBoundingClientRect();
//     colorPicker.style.position = 'absolute';
//     colorPicker.style.left = rect.right + 'px';
//     colorPicker.style.top = rect.top + 'px';
    
//     // Trigger the color picker dialog
//     colorPicker.click();
//   }

// //In the setColor function, get the selected color from the color picker and set the background color of the clicked square to the selected color.
// function setColor(event) {
//     const color = event.target.value;
//     const square = event.target.previousSibling;
//     square.style.backgroundColor = color;
    
//     // Remove the color picker from the document
//     event.target.remove();
//   }
  



// function saveSquaresAsPng() {
//     // Get all square elements
//     const squares = document.querySelectorAll(".square");

//     // Loop through squares and save as PNG
//     for (let i = 0; i < squares.length; i++) {
//         const square = squares[i];

//         html2canvas(square).then(canvas => {
//             // Convert canvas to PNG data URL
//             const pngDataUrl = canvas.toDataURL("image/png");

//             // Create a link to download the PNG file
//             const link = document.createElement("a");
//             link.download = `square-${i + 1}.png`;
//             link.href = pngDataUrl;
//             //link.href = `"./images/square-" + (i + 1) + ".png"`;
//             link.click();
//         });
//     }
// }

// function createGif() {
//     // Get all saved PNGs and add them to the gif
//     const gif = new GIF({
//         workers: 2,
//         quality: 10,
//         width: 300,
//         height: 300
//     });
//     for (let i = 1; i <= 3; i++) {
//         const img = new Image();
//         img.src = `"./images/square-" + i + ".png"`;
//         gif.addFrame(img);
//     }

//      // Render the GIF and set it as the source of the <img> tag
//      gif.on('finished', function(blob) {
//         const imgTag = document.getElementById("myGif");
//         imgTag.src = URL.createObjectURL(blob);
//     });

//      // Render frames into an animated GIF
//     gif.render();

//     console.log(gif);
// }


