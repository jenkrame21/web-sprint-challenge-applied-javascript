// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// Declared variable 'headerContainer' to link to class named 'header-container'
const headerContainer = document.querySelector('.header-container');

// Function that creates a header
function Header() {

    // Creating New Elements for HTML    
    const headerBox = document.createElement('div');
    const dateContent = document.createElement('span');
    const title = document.createElement('h1');
    const temperature = document.createElement('span');

    // Creating Class Names for New HTML Elements    
    headerBox.classList.add('header');
    dateContent.classList.add('date');
    temperature.classList.add('temp');

    // Creating Parent / Child relationships for New HTML Elements    
    headerContainer.appendChild(headerBox);
    headerBox.appendChild(dateContent);
    headerBox.appendChild(title);
    headerBox.appendChild(temperature);

    // Hardcoding Text to Content in New HTML Elements 
    dateContent.textContent = 'MARCH 28, 2020';
    title.textContent = 'Lambda Times';
    temperature.textContent = '98°';

    // Returns main container of header creating parent/child relationship with headerBox
    return headerBox;
}

// Creating Parent / Child relationship with header function
headerContainer.appendChild(Header());
