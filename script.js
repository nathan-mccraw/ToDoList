//I don't like prompts -- possibly use a disappearing edit pencil graphic beside name that appears when hover
// let userName = prompt("Enter your first name: ");
// while (!userName) userName = prompt("Enter your first name:");

// instead of prompt, use drop-down list with a custom option at the bottom
// let activity = prompt("Enter the activity (ie grocery shopping, chores, etc):");

// document.getElementById("userName").textContent = userName + "'s";
// document.getElementById("activityType").textContent = activity;

const addButton = document.getElementById("addButton");
const addByTxt = document.getElementById("addByText");
const clearButton = document.getElementById("clearList");
const currentUL = document.getElementById("taskListUL");

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

  newLI.appendChild(newTask);

  const newCheckBox = document.createElement("input");
  createCheckBox(newCheckBox, newLI);

  const newDeleteButton = document.createElement("button");
  createDeleteButton(newDeleteButton);

  newLI.insertAdjacentElement("afterbegin", newCheckBox);
  newLI.insertAdjacentElement("beforeend", newDeleteButton);
  currentUL.insertAdjacentElement("afterbegin", newLI);

  todoInput.value = "";
  todoInput.focus();
}

function createDeleteButton(newDeleteButton) {
  newDeleteButton.textContent = "x";
  newDeleteButton.addEventListener("click", function () {
    newDeleteButton.parentElement.style.display = "none";
  });
}

function createCheckBox(newCheckBox, newLI) {
  newCheckBox.setAttribute("type", "checkbox");
  newCheckBox.addEventListener("click", function () {
    newLI.classList.toggle("completedTask");
  });
}
