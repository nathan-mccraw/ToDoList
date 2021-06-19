document.getElementById("clearList").addEventListener("click", () => {
  document.getElementById("taskListUL").innerHTML = "";
});

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
});

function addTask() {
  if (todoInput.value === "") return;
  const taskList = document.getElementById("taskListUL");
  const task = createTaskListItem(todoInput.value);
  const newCheckBox = createCheckBox(task);
  const newDeleteButton = createDeleteButton(task);

  task.insertAdjacentElement("afterbegin", newCheckBox);
  task.insertAdjacentElement("beforeend", newDeleteButton);
  taskList.insertAdjacentElement("beforeend", task);

  ClearInputField();
}

function createTaskListItem(text) {
  const newLI = document.createElement("li");
  newLI.appendChild(document.createTextNode(text));
  return newLI;
}

function ClearInputField() {
  todoInput.value = "";
  todoInput.focus();
}

function createDeleteButton(task) {
  const button = document.createElement("button");
  button.textContent = "x";
  button.classList.add("DeleteButton");
  button.addEventListener("click", () => {
    task.remove();
  });
  return button;
}

function createCheckBox(task) {
  const newCheckBox = document.createElement("input");
  newCheckBox.setAttribute("type", "checkbox");
  newCheckBox.addEventListener("click", () => {
    task.classList.toggle("completedTask");
  });
  return newCheckBox;
}
