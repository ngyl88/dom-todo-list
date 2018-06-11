const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

//additional
const addDeleteBtn = parent => {
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("delete");

  deleteBtn.addEventListener("click", evt => {
    //console.log(evt);
    const liParent = evt.target.parentElement;
    if (liParent.classList.contains("done")) {
      //console.log('Task is done and could be removed');
      document.querySelector("ul").removeChild(evt.target.parentElement);
    } else {
      alert("Task could not be removed as it's not done");
    }
  });

  parent.appendChild(deleteBtn);
};

// 1. for each task
// 1a. create li
// 1b. append it to #todo-list
tasks.forEach(task => {
  const newTask = document.createElement("li");
  newTask.innerText = task;

  // additional
  addDeleteBtn(newTask);

  document.querySelector("#todo-list").appendChild(newTask);
});

// 3a. add click listener to li
/*const onTaskClicked = function(evt) {
  //console.log(evt.target.tagName);
  if (!evt.target.classList.contains("delete") && evt.target.tagName === "LI") {
    // 4. toggle class
    //console.log("li is clicked");
    evt.target.classList.toggle("done");
  }
};*/

document.querySelector("ul").addEventListener("click", evt => {
  //console.log(evt.target.tagName);
  if (!evt.target.classList.contains("delete") && evt.target.tagName === "LI") {
    // 4. toggle class
    //console.log("li is clicked");
    evt.target.classList.toggle("done");
  }
});

//document.querySelector("ul").addEventListener("click", evt => {onTaskClicked(evt));

// ADD MORE TO-DO ITEMS
// 5. Add an input HTML and a button element
const input = document.createElement("input");
input.id = "new-todo";
document.querySelector("body").appendChild(input);

const button = document.createElement("button");
button.id = "btn-add";
button.innerText = "Add Todo";
document.querySelector("body").appendChild(button);

// 6a. Create function to get value from <input> element and add to ul#todo-list
const addTodo = evt => {
  //console.log(evt);

  const inputBox = document.querySelector("input#new-todo");
  const newTodoItem = inputBox.value;

  if (newTodoItem === "") {
    alert("Empty task!");
  } else {
    inputBox.value = "";
    //console.log('Last entered todo:', newTodoItem);
    // i.  createElement
    // ii. changeAttributes
    // iii.appendChild to ul
    const newTodoItemLi = document.createElement("li");
    newTodoItemLi.textContent = newTodoItem;
    // ** Need to add event listener --> Added into ul and filter
    document.querySelector("ul").appendChild(newTodoItemLi);
    // additional
    addDeleteBtn(newTodoItemLi);
  }
};

// 6b. Add event listener, on click
document
  .querySelector("#btn-add")
  .addEventListener("click", evt => addTodo(evt));

//8. Bonus: Allow user to create a todo when they press the Enter key
document.querySelector("#new-todo").addEventListener("keypress", evt => {
  //console.log('Keypress detected with charCode:', evt.charCode);

  // Key 'Enter' detected
  if (evt.charCode === 13) {
    addTodo(evt);
  }
});
