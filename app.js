//variables
const listContainer = document.querySelector('table tbody');
// var listContainer = document.querySelector('list');

//event listeners
eventListener();

function eventListener() {
	document.getElementById('form').addEventListener('submit', onSubmit);
	listContainer.addEventListener('click', removeComment);
	document.addEventListener('DOMContentLoaded', onLoad);
}

function storageListTemplate(data) {
	//create delete btn
	const removeBtn = document.createElement('a');
	removeBtn.classList = 'remove-comment';
	removeBtn.textContent = 'X';
	removeBtn.style.color = 'red';
	removeBtn.style.fontWeight = '600';

	//create item list
	const tr = document.createElement('tr');
	const td = document.createElement('td');
	td.textContent = data;
	td.appendChild(removeBtn);
	tr.appendChild(td);
	listContainer.appendChild(tr);

	// return listContainer;
}

//  ====== Functions  =========
function onSubmit(e) {
	e.preventDefault();

	const comment = document.getElementById('input').value;

	storageListTemplate(comment);

	//add to local storage
	storeComment(comment);
}

// ======= Delete comment ========
function removeComment(e) {
	if (e.target.classList.contains('remove-comment')) {
		e.target.parentElement.parentElement.remove();
	}

	const comment = e.target.parentElement.parentElement.textContent;
	//removeCommentInStorage
	removeCommentInStorage(comment);
}

// ==== xxxxxxxxxxxxxxxx ============
function storeComment(comment) {
	let comments = getComment();
	comments.push(comment);
	//convert comment and insert into LS
	localStorage.setItem('comments', JSON.stringify(comments));
}

// ====== pull items from Locale Storage =======
function getComment() {
	let comments;
	const commentGet = localStorage.getItem('comments');

	//get values, if null return an empty array,otherwise get items in []
	if (commentGet === null) {
		comments = [];
	} else {
		comments = JSON.parse(commentGet);
	}

	//this provides us with an empty array
	return comments;
}

//===== display items in LS on Load =======
function onLoad() {
	let comments = getComment();

	console.log('out:', comments);
	comments.forEach((comment) => {
		storageListTemplate(comment);
	});
}

// ======Removing from Storage =======

function removeCommentInStorage(comment) {
	let comments = getComment();

	//remove X from the comment
	const commentDelete = comment.substring(0, comment.length - 1);

	comments.forEach((commentLS, index) => {
		if (commentDelete === commentLS) {
			comments.splice(index, 1);
		}
	});

	localStorage.setItem('comments', JSON.stringify(comments));
	console.log(comments);
}
