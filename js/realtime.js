const realTime = document.querySelector(".js-realTime");

function userTime() {
  const currentTime = new Date();
  const hours = Math.floor(currentTime / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(currentTime / (1000 * 60)) % 60;
  const seconds = Math.floor(currentTime / 1000) % 60;

  realTime.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

userTime();
setInterval(userTime, 1000);
