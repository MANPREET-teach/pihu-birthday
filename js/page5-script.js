// ========== PAGE 5 CONFETTI ANIMATION ==========

// floating hearts generator
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    if (!container) return;
    
    for(let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = ['❤️', '💖', '💗', '💘', '🌸', '🌹'][Math.floor(Math.random() * 6)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 8 + 5 + 's';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.fontSize = Math.random() * 25 + 12 + 'px';
        heart.style.opacity = Math.random() * 0.4 + 0.2;
        container.appendChild(heart);
    }
}

createFloatingHearts();

// Romantic Confetti with hearts and rose petals vibe
function romanticConfetti() {
    const confettiCanvas = document.createElement('canvas');
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.top = '0';
    confettiCanvas.style.left = '0';
    confettiCanvas.style.width = '100%';
    confettiCanvas.style.height = '100%';
    confettiCanvas.style.pointerEvents = 'none';
    confettiCanvas.style.zIndex = '9999';
    document.body.appendChild(confettiCanvas);
    
    const ctx = confettiCanvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    confettiCanvas.width = width;
    confettiCanvas.height = height;
    
    let particles = [];
    const colors = ['#FF6B9D', '#FF416D', '#FF8DA1', '#FFB347', '#FF99AC', '#FFC0CB', '#FF4D6D'];
    const shapes = ['❤️', '🌸', '💖', '✨', '🎀', '🌹'];
    const particleCount = 150;
    
    for(let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height - height,
            size: Math.random() * 20 + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 9 + 4,
            speedX: (Math.random() - 0.5) * 2.5,
            rotation: Math.random() * 360,
            spin: (Math.random() - 0.5) * 6,
            isEmoji: Math.random() > 0.6,
            emoji: shapes[Math.floor(Math.random() * shapes.length)]
        });
    }
    
    let animationFrame;
    let startTime = performance.now();
    
    function drawRomantic(now) {
        const elapsed = (now - startTime);
        if(elapsed > 3200) {
            cancelAnimationFrame(animationFrame);
            confettiCanvas.remove();
            return;
        }
        
        ctx.clearRect(0, 0, width, height);
        
        for(let p of particles) {
            p.y += p.speedY * 0.65;
            p.x += p.speedX;
            p.rotation += p.spin;
            
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            
            if(p.isEmoji) {
                ctx.font = `${p.size}px "Segoe UI Emoji"`;
                ctx.fillStyle = p.color;
                ctx.fillText(p.emoji, -p.size/2, -p.size/2);
            } else {
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 8;
                ctx.beginPath();
                ctx.moveTo(0, -p.size/2);
                ctx.bezierCurveTo(p.size/2, -p.size/3, p.size/2, p.size/3, 0, p.size/2);
                ctx.bezierCurveTo(-p.size/2, p.size/3, -p.size/2, -p.size/3, 0, -p.size/2);
                ctx.fill();
            }
            ctx.restore();
        }
        
        animationFrame = requestAnimationFrame(drawRomantic);
    }
    
    animationFrame = requestAnimationFrame(drawRomantic);
    
    setTimeout(() => {
        if(animationFrame) cancelAnimationFrame(animationFrame);
        if(confettiCanvas && confettiCanvas.remove) confettiCanvas.remove();
    }, 3300);
}

// Trigger confetti on page load
document.addEventListener('DOMContentLoaded', () => {
    romanticConfetti();
});

// Also trigger immediately in case DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', romanticConfetti);
} else {
    setTimeout(romanticConfetti, 500);
}

console.log("💖 For Pihu Sharma ji meri Malkin ji — HAPPY BIRTHDAY! 💖");
