const taskInputForm = document.querySelector(".js-taskInputForm");
const taskInput = taskInputForm.querySelector("input");

const TASK_LS = "task";

function test() {
  localStorage.setItem(TASK_LS, task);
}

function saveTask(event) {
  event.preventDefault();
  const task = taskInput.value;
  //지우기 전에 값을 저장하여 불러오기
  taskInput.value = "";
}

taskInputForm.addEventListener("submit", saveTask);
