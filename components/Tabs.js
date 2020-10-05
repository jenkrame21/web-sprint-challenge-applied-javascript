// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// Linking data from outside source to here
axios.get('https://lambda-times-api.herokuapp.com/topics')
    // If successful at grabbing data, do this:
    .then(res => {
        res.data.topics.map(topic => tabMaker(topic))
    })
    // If error, do this:
    .catch(err => {
        console.log(err);
    });

// Function to create new tabs
function tabMaker(axiosData) {

    // Creating a New Element for HTML
    const tabBox = document.createElement('div');

    // Creating a Class Name for New HTML Element
    tabBox.classList.add('tab');

    // Linking text source to 'topic'
    tabBox.textContent = (`${axiosData}`);

    // Assign 'topicBox' to select one class of 'topics' in HTML
    const topicBox = document.querySelector('.topics');

    // Create parent/child relationship with 'topicBox' and 'tabBox'
    topicBox.appendChild(tabBox);

    // Returns newly created 'tabBox'
    return tabBox;

}

