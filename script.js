//variables
const input = document.querySelector('#name');
const submitBtn = document.querySelector('#submit');

//event listeners
eventListeners();
function eventListeners() {
	submitBtn.addEventListener('click', formSubmit);
	document.addEventListener('DOMContentLoaded', storageOnLoad);
}

//functions
function formSubmit(e) {
	e.preventDefault();

	const inputElement = input.value;

	itemsContainer(inputElement);
	saveToStorage(inputElement);

	//  input.value = ''
}

// Dom Element
function itemsContainer(input) {
	const table = document.querySelector('.table tbody');
	const row = document.createElement('tr');
	const nameTd = document.createElement('td');
	nameTd.classList = 'h3';
	const iconTd = document.createElement('td');
	iconTd.classList = 'h4';
	iconTd.innerHTML = `
    <i class="fas fa-check btn-success check py-2 px-2 ml-2"></i>  
        <i class="fas fa-trash btn-danger delete  py-2 px-2"></i>`;
	nameTd.textContent = input;
	row.appendChild(nameTd);
	row.appendChild(iconTd);
	table.appendChild(row);
}

//Delete from DOM
document.body.addEventListener('click', function(e) {
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.parentElement.remove();
	}

	removeFromStorage(e.target.parentElement.parentElement.textContent);
});
/************************* Storage Codes**************************/
//save to Storage
function saveToStorage(inputData) {
	const storeItems = getItem();
	console.log(storeItems);

	storeItems.push(inputData);

	localStorage.setItem('names', JSON.stringify(storeItems));
}

//Read/Get from Storage
function getItem() {
	const storeItems = localStorage.getItem('names');
	let names;
	if (storeItems === null) {
		names = [];
	} else {
		names = JSON.parse(storeItems);
	}
	return names;
}

////FOR THE APP TO WORK IN HTML

//Print Items in Storage upon Load
function storageOnLoad() {
	const storeItems = getItem();

	storeItems.forEach(function(item) {
		itemsContainer(item);
	});
	console.log(storeItems);
}

//Delete from Storage  Incomplete
function removeFromStorage(name) {
	const names = getItem();
	// console.log(names)

	const deleteName = name.substring(0, name.length - 1);

	console.log('delete:', deleteName);
	names.forEach(function(item, index) {
		if (deleteName === item) {
			console.log('yes');
		} else {
			names.splice(item, 1);

			console.log('id:', deleteName);
		}
	});

	localStorage.setItem('names', JSON.stringify(names));
}
