const btn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const home = document.getElementById("home");
const music = document.getElementById("bgMusic");
const confirmParagraph = document.getElementById('confirm-p');
let isMusicAllowed;


const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
let animationFrame;

// Create particles
for (let i = 0; i < 150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 50,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        tilt: Math.random() * 10 - 10
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.r, c.r);
    });

    update();
    animationFrame = requestAnimationFrame(draw);
}

function update() {
    confetti.forEach((c) => {
        c.y += Math.cos(c.d) + 2;
        c.x += Math.sin(c.d);
        
        if (c.y > canvas.height) {
            c.y = -10;
            c.x = Math.random() * canvas.width;
        }
    });
}



// Resize fix
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
window.addEventListener('load', () => {
    isMusicAllowed = sessionStorage.getItem('MusicAllowed');
    if (isMusicAllowed) {
        confirmParagraph.innerText = 'כן צריך לאשר שוב 🙃'
    }
})


btn.addEventListener("click", () => {
    sessionStorage.setItem('MusicAllowed', 'true');
    music.volume = 0;
    music.play();

    // Fade in volume
    let volume = 0;
    const fadeAudio = setInterval(() => {
        if (volume < 1) {
            volume += 0.05;
            music.volume = volume;
        } else {
            clearInterval(fadeAudio);
        }
    }, 200);

    // Fade out intro
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        home.style.opacity = "1";
        document.body.style.overflow = "auto";
    }, 1000);

    draw();
});


