const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Simple car object
const car = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 100,
    width: 50,
    height: 100,
    color: 'red',
    speed: 5
};

function drawCar() {
    ctx.fillStyle = car.color;
    ctx.fillRect(car.x, car.y, car.width, car.height);
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
    clear();
    drawCar();
    requestAnimationFrame(gameLoop);
}

gameLoop();

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') car.x -= car.speed;
    if (e.key === 'ArrowRight') car.x += car.speed;
    if (e.key === 'ArrowUp') car.y -= car.speed;
    if (e.key === 'ArrowDown') car.y += car.speed;
});
