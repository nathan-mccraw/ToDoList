alert("You can edit your name and the title of the list");

const addButton = document.getElementById("addButton");
const addByTxt = document.getElementById("addByText");
const clearButton = document.getElementById("clearList");
const currentUL = document.getElementById("taskListUL");

clearButton.addEventListener("click", () => {
  document.getElementById("taskListUL").innerHTML = "";
});
addButton.addEventListener("click", addTask);

addByTxt.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
});

function addTask() {
  if (todoInput.value === "") return;
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

  ClearInputField(todoInput);
}

function ClearInputField(todoInput) {
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
