const addButton = document.getElementById("addButton");
const addByEnter = document.getElementById("addByText");
const clearButton = document.getElementById("clearList");
const UlNode = document.getElementById("taskListUL");

clearButton.addEventListener("click", () => {
  document.getElementById("taskListUL").innerHTML = "";
});
addButton.addEventListener("click", addTask);

addByEnter.addEventListener("submit", (event) => {
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
  UlNode.insertAdjacentElement("beforeend", newLI);

  ClearInputField(todoInput);
}

function ClearInputField(todoInput) {
  todoInput.value = "";
  todoInput.focus();
}

function createDeleteButton(newDeleteButton) {
  newDeleteButton.textContent = "x";
  newDeleteButton.classList.add("DeleteButton");
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
