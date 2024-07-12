// Write your code here!
// Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new <h1> element to the body
document.body.appendChild(newHeader);

