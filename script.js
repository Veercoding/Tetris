const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

let score = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw game elements

  scoreElement.textContent = `Score: ${score}`;
}

function updateScore() {
  score++;
}

// Call updateScore() and draw() on animation frame