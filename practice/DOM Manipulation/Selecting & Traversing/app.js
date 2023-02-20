// ------ Selecting Element ------

// 1. by ID 
// const title = document.getElementById('main-heading');   


// 2. by Class name
// const listItems = document.getElementsByClassName('list-items');


// 3. by Tag name
// const listItems = document.getElementsByTagName('li');


// 4. by CSS selector
// const container = document.querySelector('div');
 
// const divs = document.querySelectorAll('div');



// ------ Styling an element ------

// 1. Single element
// const title = document.querySelector('#main-heading');
// title.style.color = 'red';

// 2. List of items
// const listItems = document.querySelectorAll('.list-items');

// for ( let i = 0; i < listItems.length; i++ ) {
//     listItems[i].style.color = 'green';
//     listItems[i].style.fontSize = '2rem';
// }


// Creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li');


// Adding elements
ul.append(li);


// Modifying the text
li.innerText = 'X-Men';

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);


// Modifying attributes
// li.setAttribute('id', 'main-heading');

// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));


// Modifying classes
li.classList.add('list-items');

// li.classList.remove('list-items');

// console.log(li.classList.contains('list-items'));

// Remove elements
li.remove();




// Traverse the DOM


// Parent Node traversal
const div = document.querySelector('div');

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);


// Child Node traversal
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);


// Sibling Node traversal
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);