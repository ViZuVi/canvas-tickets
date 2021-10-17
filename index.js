const canvas = document.querySelector("#canvas")

const ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.fillRect(5, 5, 100, 100);

// const pi = Math.PI;

// ctx.beginPath();
// ctx.lineWidth = 5;
// ctx.strokeStyle = "blue";
// ctx.fillStyle = "yellow";
// ctx.arc(210, 110, 50, 2 * pi, false);
// ctx.stroke();
// ctx.fill();

// ctx.beginPath();
// ctx.lineWidth = 5;
// ctx.strokeStyle = "red";
// ctx.fillStyle = "pink";
// ctx.arc(310, 210, 50, 2 * pi, false);
// ctx.stroke();
// ctx.fill();

// ctx.clearRect(0, 0, 600, 400);

const seat = {
  WIDTH: 20,
  HEIGHT: 20,
};

const colors = {
  PREMIUM: "#17b4e8",
  STANDART: "#174be8"
};

const drawScreen = () => {
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.arc(287, 60, 190, 0, Math.PI, true); // TODO: find correct endANgle
  ctx.stroke();
}

const drawSeat = (isPremium, x, y) => {
  ctx.beginPath();
  ctx.fillStyle = isPremium ? colors.PREMIUM : colors.STANDART;
  ctx.fillRect(x, y, seat.WIDTH, seat.HEIGHT);
  ctx.closePath();
  canvas.addEventListener("click", (e) => console.log(e.offsetX))
}

const drawAllSeats = () => {
  let startX = 120;
  let startY = 80;
  let isPremium = true;
  
  for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 10; i++) {
      drawSeat(isPremium, startX, startY);
      startX += seat.WIDTH + 15;
    }
    startX = 120;
    startY += seat.HEIGHT + 10;
    isPremium = !isPremium;
  }
}

drawScreen();
drawAllSeats();
