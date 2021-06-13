const taskInputForm = document.querySelector(".task-input-form");
const taskInput = taskInputForm.querySelector("input");
const taskList = document.querySelector(".add-task");
const finishTask = document.querySelector(".finish-task");

const TASK_LS = "TASK";

let toDoTaskList = [];

function saveTask() {
  localStorage.setItem(TASK_LS, JSON.stringify(toDoTaskList));
}

function delBtnFn(event) {
  const li = event.target.parentNode;
  li.remove();
  toDoTaskList = toDoTaskList.filter((task) => task.id !== parseInt(li.id));
  saveTask();
}

function toDoTask(addTaskObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const finBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  span.innerText = addTaskObj.text;
  li.id = addTaskObj.id;
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", delBtnFn);
  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
}

function handlesubmit(event) {
  event.preventDefault();
  const addTask = taskInput.value;
  taskInput.value = "";
  const addTaskObj = {
    text: addTask,
    id: Date.now(),
  };
  toDoTaskList.push(addTaskObj);
  toDoTask(addTaskObj);
  saveTask();
}

function loadTask() {
  const loadToDoTask = localStorage.getItem(TASK_LS);
  if (loadToDoTask !== null) {
    const parseTask = JSON.parse(loadToDoTask);
    toDoTaskList = parseTask;
    parseTask.forEach(toDoTask);
  }
}

loadTask();
taskInputForm.addEventListener("submit", handlesubmit);
