/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

// Assign 'carouselCon' to select one class of 'carousel-container' in HTML
const carouselCon = document.querySelector('.carousel');
const slides = Array.from(carouselCon.children);
console.log(slides);

// function carouselMaker() {

//   // Creating New Elements for HTML    
//   const carouselBox = document.createElement('div');
//   const leftButton = document.createElement('div');
//   const mountainPic = document.createElement('img');
//   const computerPic = document.createElement('img');
//   const treesPic = document.createElement('img');
//   const turnTablePic = document.createElement('img');
//   const rightButton = document.createElement('div');

//   // Creating Class Names for New HTML Elements    
//   carouselBox.classList.add('carousel');
//   leftButton.classList.add('left-button');
//   rightButton.classList.add('right-button');

//   // Linking sources
//   mountainPic.src = 'https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg';
//   computerPic.src = 'https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg';
//   treesPic.src = 'https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg';
//   turnTablePic.src = 'https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg';


//   // Creating Parent / Child relationships for New HTML Elements
//   carouselCon.appendChild(carouselBox);
//   carouselBox.appendChild(leftButton);
//   carouselBox.appendChild(mountainPic);
//   carouselBox.appendChild(computerPic);
//   carouselBox.appendChild(treesPic);
//   carouselBox.appendChild(turnTablePic);
//   carouselBox.appendChild(rightButton);

//   leftButton.addEventListener('click', () => {
//     leftButton.classList.toggle('selected');
//   })

//   rightButton.addEventListener('click', () => {
//     rightButton.classList.toggle('selected');
//   })

//   // Returns newly created 'carouselBox'
//   return carouselBox
  
// }

// carouselCon.appendChild(carouselMaker());


/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
