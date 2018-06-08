const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

//additional
const addDeleteBtn = (parent) => {
	const deleteBtn = document.createElement('button');
	deleteBtn.innerText = 'X';
	deleteBtn.classList.add('delete');

	deleteBtn.addEventListener('click', (evt) => {
		console.log(evt.target);
	});

	parent.appendChild(deleteBtn);
}

// 1. for each task
// 1a. create li
// 1b. append it to #todo-list
tasks.forEach((task) => {
	const newTask = document.createElement('li');
	newTask.innerText = task;
	
	// additional
	addDeleteBtn(newTask);
	
	document.querySelector('#todo-list').appendChild(newTask);
});

// 3a. add click listener to li
/*document.querySelectorAll('li').forEach((task) => {
	task.onclick = function(evt) {
		// console.log(evt.target.classList);
		
		// 3b. add class to li
		// evt.target.classList.add('done');
		
		// 4. instead of add, update to toggle class
		evt.target.classList.toggle('done');
		
		// console.log(evt.target.classList);
	};
});*/

//** Explicit function required to re-attached into event listener after step 6
const onTaskClicked = function() {
	// 3b. add class
	//this.classList.add('done');
	// 4. toggle class
	this.classList.toggle('done');
};

document.querySelectorAll('li').forEach((task) => {
	task.addEventListener('click', onTaskClicked)
});

// ADD MORE TO-DO ITEMS
// 5. Add an input HTML and a button element
const input = document.createElement('input');
input.id = 'new-todo';
document.querySelector('body').appendChild(input);

const button = document.createElement('button');
button.id = 'btn-add';
button.innerText = 'Add Todo';
document.querySelector('body').appendChild(button);

// 6a. Create function to get value from <input> element and add to ul#todo-list
const addTodo = (evt) => {
	console.log(evt);

	const inputBox = document.querySelector('input#new-todo');
	const newTodoItem = inputBox.value;

	if(newTodoItem === '') {
		alert('Empty task!');
	} else {
		inputBox.value = '';
		console.log('Last entered todo:', newTodoItem);
		// i.  createElement
		// ii. changeAttributes
		// iii.appendChild to ul
		const newTodoItemLi = document.createElement('li');
		newTodoItemLi.textContent = newTodoItem;
		// ** Need to add event listener
		newTodoItemLi.addEventListener('click', onTaskClicked);
		document.querySelector('ul').appendChild(newTodoItemLi);
		// additional
		addDeleteBtn(newTodoItemLi);
	}
	
};

// 6b. Add event listener, on click
// Checking
//document.querySelector('#btn-add').addEventListener('click', () => console.log('button clicked!'));
document.querySelector('#btn-add').addEventListener('click', (evt) => addTodo(evt));

//8. Bonus: Allow user to create a todo when they press the Enter key
document.querySelector('#new-todo').addEventListener('keypress', (evt) => {
	// Checking
	//console.log('Keypress detected with charCode:', evt.charCode);

	// Entered detected
	if(evt.charCode === 13) {
		addTodo(evt);
	}
});
