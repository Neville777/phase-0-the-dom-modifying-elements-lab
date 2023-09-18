// Write your code here !
// Select the <main> element with id 'main'
const mainElement = document.getElementById('main');

// Remove the selected element from the DOM
mainElement.remove();
// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set its id attribute to 'victory'
newHeader.id = 'victory';

// Set the text content
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace 'YOUR-NAME'

// Append the new <h1> element to the document's <body>
document.body.appendChild(newHeader);
