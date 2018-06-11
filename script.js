const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

//additional
const addDeleteBtn = parent => {
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("delete");

  deleteBtn.addEventListener("click", event => {
    //console.log(event);
    const liParent = event.target.parentElement;
    if (liParent.classList.contains("done")) {
      //console.log('Task is done and could be removed');
      document.querySelector("ul").removeChild(event.target.parentElement);
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

document.querySelector("ul").addEventListener("click", event => {
  //console.log(event.target.tagName);
  if (!event.target.classList.contains("delete") && event.target.tagName === "LI") {
    // 4. toggle class
    //console.log("li is clicked");
    event.target.classList.toggle("done");
  }
});

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
const addTodo = event => {
  //console.log(event);

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
  .addEventListener("click", event => addTodo(event));

//8. Bonus: Allow user to create a todo when they press the Enter key
document.querySelector("#new-todo").addEventListener("keypress", event => {
  //console.log('Keypress detected with charCode:', event.charCode);

  // Key 'Enter' detected
  if (event.charCode === 13) {
    addTodo(event);
  }
});
