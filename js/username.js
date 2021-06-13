const userNameForm = document.querySelector(".user-name-form"),
  currentUserName = document.querySelector(".current-user-name"),
  USERNAME_LS = "username";

function saveName(event) {
  event.preventDefault();
  const userName = userNameForm.querySelector("input").value;
  if (userName.replace(/ /gi, "") === "") {
    currentUserName.innerHTML = "Please write your Name";
  } else {
    localStorage.setItem(USERNAME_LS, userName);
    loadName();
    userNameForm.classList.add("none");
  }
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
