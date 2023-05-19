const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; //576

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

let y = 100;
let x = 100;
function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "red";
  c.fillRect(100, y, 100, 100);
  y++;
}

animate();
