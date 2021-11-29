const canvas = document.querySelector("#canvas")

const ctx = canvas.getContext("2d");

const singleSeat = new Seat("economy", "evening", true, 120, 80);

const drawScreen = () => {
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.arc(287, 60, 190, 0, Math.PI, true); // TODO: find correct endANgle
  ctx.stroke();
}


// singleSeat.addEventListener("click", (e) => {
//   console.log(e)
// })
singleSeat.drawSeat();

// const drawAllSeats = () => {
//   let startX = 120;
//   let startY = 80;
//   let isPremium = true;
  
//   for (let j = 0; j < 8; j++) {
//     for (let i = 0; i < 10; i++) {
//       drawSeat(isPremium, startX, startY);
//       startX += seat.WIDTH + 15;
//     }
//     startX = 120;
//     startY += seat.HEIGHT + 10;
//     isPremium = !isPremium;
//   }
// }

drawScreen();
// drawAllSeats();
