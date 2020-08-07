const storageContent = localStorage.getItem('fruits');

let items;
if (storageContent === null) {
	items = [];
}
console.log(JSON.parse(storageContent));
items.push('Avocado');
items.push('Mango');
items.push('Apple');

localStorage.setItem('fruits', JSON.stringify(items));
