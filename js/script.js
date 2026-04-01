// ========== COUNTDOWN LOGIC for 24th JUNE (for Page 1) ==========
function updateCountdown() {
    const countdownElements = document.getElementById('countdownTimer');
    
    if (!countdownElements) return; // Skip if not on page 1
    
    const targetDate = new Date(new Date().getFullYear(), 5, 24); // June 24 (month 5)
    const today = new Date();
    
    // if birthday already passed this year, target next year
    let target = new Date(targetDate);
    if (today > target) {
        target = new Date(new Date().getFullYear() + 1, 5, 24);
    }
    
    const diff = target - today;
    if (diff <= 0) {
        const elems = document.querySelectorAll('.time-number');
        elems.forEach(el => el.innerText = "00");
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (86400000)) / (3600000));
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.innerText = days < 10 ? '0' + days : days;
    if (hoursEl) hoursEl.innerText = hours < 10 ? '0' + hours : hours;
    if (minutesEl) minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
    if (secondsEl) secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

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

// ========== PAGE NAVIGATION LOGIC ==========
let currentPage = 1;
const totalPages = 5;

function showPage(pageNum) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(`page${pageNum}`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    currentPage = pageNum;
    updateNavButtons();
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');
    
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;
    if (pageIndicator) pageIndicator.textContent = `Page ${currentPage} / ${totalPages}`;
}

function goToNextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

function goToPrevPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}

// Button event listeners
document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const unlockWishBtn = document.getElementById('unlockWishBtn');
    
    if (nextBtn) nextBtn.addEventListener('click', goToNextPage);
    if (prevBtn) prevBtn.addEventListener('click', goToPrevPage);
    if (unlockWishBtn) unlockWishBtn.addEventListener('click', function() {
        showPage(5);
    });
    
    // Show first page on load
    showPage(1);
});

console.log("💖 For Pihu Sharma ji meri Malkin ji — Happy Birthday 24th June! 💖");