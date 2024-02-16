document.addEventListener('DOMContentLoaded', function () {
    let timerInterval;
    let minutes = 0;
    let seconds = 0;

    function updateTimer() {
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }

    document.getElementById('startStopButton').addEventListener('click', function () {
        if (timerInterval) {
            // Stop the timer
            clearInterval(timerInterval);
            timerInterval = null;
            document.getElementById('startStopButton').innerText = 'Start';
        } else {
            // Start the timer
            timerInterval = setInterval(function () {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                updateTimer();
            }, 1000);
            document.getElementById('startStopButton').innerText = 'Stop';
        }
    });
});