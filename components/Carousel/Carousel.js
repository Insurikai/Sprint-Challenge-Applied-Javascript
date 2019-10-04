/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
/* Banner fix */
document.querySelector(".top-bar").style.zIndex = "1";
/* End Banner fix */

let index = 0;
const parent = document.querySelector(".carousel-container").appendChild(document.createElement("div"));
parent.classList.add("carousel");
const leftButton = parent.appendChild(document.createElement("div"));
leftButton.classList.add("left-button");
leftButton.textContent = " < ";
const images = [];
images.push(parent.appendChild(document.createElement("img")));
images.push(parent.appendChild(document.createElement("img")));
images.push(parent.appendChild(document.createElement("img")));
images.push(parent.appendChild(document.createElement("img")));
images[0].src = "./assets/carousel/mountains.jpeg";
images[1].src = "./assets/carousel/computer.jpeg";
images[2].src = "./assets/carousel/trees.jpeg";
images[3].src = "./assets/carousel/turntable.jpeg";
const rightButton = parent.appendChild(document.createElement("div"));
rightButton.classList.add("right-button");
rightButton.textContent = " > ";

function showImg(newIndex){
  console.log('before',newIndex);
  if (newIndex < 0) { newIndex = images.length-1; }else if(newIndex >= images.length){ newIndex = 0; }
  index = newIndex;
  console.log('after',newIndex);
  images.forEach(img=> img.removeAttribute("style"));
  images[index].style.display = "flex";
}