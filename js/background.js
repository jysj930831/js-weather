const images = ["0.jpg", "1.jpg", "2.jpg"];
const bgImage = document.createElement("img");

const currentImage = images[Math.floor(Math.random() * images.length)];

bgImage.src = `img/${currentImage}`;

document.body.prepend(bgImage);
