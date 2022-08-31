const playBtn = document.getElementById("play");
const PlayBox = document.getElementById("playbox");
const gameBox = document.getElementById("gamebox");
const img = document.getElementById("handimg");
const count = document.getElementById("counter");
const Hname = document.getElementById("handname");

playBtn.addEventListener("click", () => {
  gameBox.style.display = "none";
  PlayBox.style.display = "flex";
  startPaly();
});

const cngimg = (inp) => {
  img.src = "images/" + inp + ".png";
};

const playaudio = (file) => {
  var audio = new Audio("audio/" + file + ".mp3");
  audio.play();
};

const startPaly = () => {
  count.style.display = "flex";

  let hnum = Math.floor(Math.random() * 3);
  const hands = ["rock", "paper", "scissor"];
  const color = ["#1CB3DF", "#1CB3DF", "#34DF1C", "#DF911C"];

  let time = 0;
  let settime = 3;

  const startgame = window.setInterval(() => {
    if (settime === time) {
      let hnm = hands[hnum];
      cngimg(hnm);
      Hname.innerHTML = hnm;
      count.innerHTML = "READY !";
      window.clearInterval(startgame);
      count.style.display = "none";
      playaudio(hnm);
    } else {
      count.style.backgroundColor = color[settime];
      count.innerHTML = settime;
      settime = settime - 1;
      count.style.display = "flex";
    }
  }, 1000);
};
