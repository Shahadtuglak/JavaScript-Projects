
// We use basic function to tackle this project



function imageGenerator() {
    var image = document.createElement('img');//make new img element
    var imageDiv = document.getElementById('image-div');//take the div and put this is simple variable
    image.src = "https://source.unsplash.com/collection/190727/320x250";
    imageDiv.appendChild(image);// then simply move the image into the Div
}

