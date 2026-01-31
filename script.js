document.addEventListener('DOMContentLoaded', () => {
    // Target Date: Feb 2, 2026
    const targetDate = new Date('February 2, 2026 00:00:00').getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Timer finished
            document.querySelector('.countdown').innerHTML = '<h2>We have launched!</h2>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = formatTime(days);
        hoursEl.textContent = formatTime(hours);
        minutesEl.textContent = formatTime(minutes);
        secondsEl.textContent = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // Initial call
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);

    // Simple animation for the "Notify Me" button
    const btn = document.querySelector('.btn-notify');
    btn.addEventListener('click', () => {
        btn.textContent = "You're on the list!";
        btn.style.backgroundColor = '#fff';
        btn.style.cursor = 'default';
        setTimeout(() => {
             // Reset after a few seconds
             btn.textContent = "Notify Me When We Launch";
        }, 3000);
    });
});
