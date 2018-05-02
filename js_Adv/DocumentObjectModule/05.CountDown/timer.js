window.onload = function() {
    countdown(600)

    function countdown(seconds) {
        let minutesLeft = Math.floor(seconds / 60);
        let secondsLeft = seconds % 60;

        function decrement() {
            if (secondsLeft == 0) {
                secondsLeft += 60;
                minutesLeft--;
            }
            secondsLeft--;
            if (secondsLeft < 10) {
                secondsLeft = '0' + secondsLeft;
            }
            document.getElementById('time').value = minutesLeft + ":" + secondsLeft
        }
        setInterval(function() {
            decrement()
        }, 1000)
    }
}