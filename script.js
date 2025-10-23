function startCountdown() {
    const countdownContainer = document.getElementById('countdownContainer');
    const countdownNumber = document.getElementById('countdownNumber');
    const countdownText = document.querySelector('.countdown-text');
    const mainContent = document.querySelector('.main-content');
    const revealButton = document.getElementById('revealButton');

    mainContent.style.opacity = '0';

    function updateCountdown() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0); // change to +1 minute for testing

        const timeLeft = midnight - now;

        if (timeLeft <= 0) {
            countdownContainer.classList.add('hide');
            revealButton.classList.add('show');
            return;
        }

        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (hours > 0) {
            countdownNumber.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            countdownText.textContent = `Until midnight... Get ready for something special!`;
        } else if (minutes > 0) {
            countdownNumber.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            countdownText.textContent = `Minutes until midnight... Almost there!`;
        } else {
            countdownNumber.textContent = seconds;
            countdownText.textContent = `Seconds until midnight... Here we go!`;
        }

        countdownNumber.style.animation = 'none';
        setTimeout(() => {
            countdownNumber.style.animation = 'countdownPulse 1s ease-in-out';
        }, 10);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ✅ Run after DOM is loaded
window.addEventListener('load', startCountdown);
