const userNameForm = document.querySelector(".js-userNameForm");
const currentUserName = document.querySelector(".js-currentUserName");

const USERNAME_LS = "userName";

function saveName(event) {
  event.preventDefault();
  const userName = userNameForm.querySelector("input").value;
  localStorage.setItem(USERNAME_LS, userName);
  loadName();
  userNameForm.classList.add("none");
}

function loadName() {
  loadUserName = localStorage.getItem(USERNAME_LS);
  if (loadUserName !== null) {
    currentUserName.innerHTML = `Hello ${loadUserName}`;
    userNameForm.classList.add("none");
  }
}

loadName();
userNameForm.addEventListener("submit", saveName);
