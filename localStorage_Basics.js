//Add item to local storage
localStorage.setItem('name', 'Saalu');
localStorage.setItem('food', 'Banku');

//Delete item
//localStorage.removeItem('name');

//Read value

const name = localStorage.getItem('food');

console.log(name);

// Clear local storage
//localStorage.clear();

//Update item
localStorage.setItem('food', 'Rice');
