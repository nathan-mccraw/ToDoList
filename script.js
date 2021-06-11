//I don't like prompts -- possibly use a disappearing edit pencil graphic beside name that appears when hover
// let userName = prompt("Enter your first name: ");
// while (!userName) userName = prompt("Enter your first name:");

// instead of prompt, use drop-down list with a custom option at the bottom
// let activity = prompt("Enter the activity (ie grocery shopping, chores, etc):");

// document.getElementById("userName").textContent = userName + "'s";
// document.getElementById("activityType").textContent = activity;

//Step 1. pass the data from the input field into a variable. todoInput.value;
//Step 2. use createElement() to create <li></li>
//Step 3. populate the textContent value of the li with the input value variable.
//Step 4. use createElement() to create a delete button
//Step 5. use appendChild() to append the delete button to the li
//Step 6. use appendChild() to append the li to the todoList/ul

//Function for form submission --if you hit submit
//-text from the text box is added into an array
//if statement
//-if array is empty then display graphic else display array
//array needs to display a check box on the left of the string and a button on the right of the string
//-check box on left of string in array that does text-transform strikeout <- strikeout function?
//-circular button on right with "x" that deletes array at that index <- delete function ?

const addButton = document.getElementById("addButton");
const addByTxt = document.getElementById("addByText");
const clearButton = document.getElementById("clearList");
let taskCounter = 1;

clearButton.addEventListener("click", () => {
  document.getElementById("taskListUL").innerHTML = "";
  taskCounter = 1;
});
addButton.addEventListener("click", addTask);

addByTxt.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
});

function addTask() {
  const newTask = document.createTextNode(todoInput.value);
  const newLI = document.createElement("li");
  newLI.id = `taskText${taskCounter}`;
  newLI.class = `task${taskCounter}`;

  const currentUL = document.getElementById("taskListUL");
  newLI.appendChild(newTask);

  const newCheckBox = document.createElement("input");
  createCheckBox(newCheckBox);

  const newDeleteButton = document.createElement("button");
  createDeleteButton(newDeleteButton);

  newLI.insertAdjacentElement("afterbegin", newCheckBox);
  newLI.insertAdjacentElement("beforeend", newDeleteButton);
  currentUL.insertAdjacentElement("afterbegin", newLI);

  todoInput.value = "";
  todoInput.focus();
  taskCounter++;
}

function createDeleteButton(newDeleteButton) {
  newDeleteButton.textContent = "x";
  newDeleteButton.id = `deleteButton${taskCounter}`;
  newDeleteButton.class = `task${taskCounter}`;
  newDeleteButton.addEventListener("click", removeTask(taskCounter));
}

function createCheckBox(newCheckBox) {
  newCheckBox.setAttribute("type", "checkbox");
  newCheckBox.id = `checkBox${taskCounter}`;
  newCheckBox.class = `task${taskCounter}`;
  newCheckBox.addEventListener("click", strikeTask(taskCounter));
}

function removeTask(index) {
  let taskToBeRemoved = document.querySelectorAll(`#task${index}`);
  taskToBeRemoved.remove;
}

function strikeTask(index) {}
