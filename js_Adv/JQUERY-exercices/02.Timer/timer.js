function timer() {
    let time = 0;
    let hours = 0;
    let hoursSpan = $('#hours');
    let minutesSpan = $('#minutes');
    let secondsSpan = $('#seconds');

    $('#start-timer').on('click', function () {

        $('#start-timer').attr('disabled', true)
        
        let timer = setInterval(function myTimer() {
            time++;
            secondsSpan.text(('0' + (time % 60)).slice(-2))
            minutesSpan.text(("0" + Math.trunc(time / 60)).slice(-2))
            if (time === 3600) {
                hours++;
                time = 0;
                minutesSpan.text('00');
                hoursSpan.text(('0' + hours).slice(-2))
            }

            $('#stop-timer').on('click', function () {
                clearInterval(timer)
                $('#start-timer').attr('disabled', false)
            })
        }, 1000);
    })
}

//  shorter solution
//  if (time === 3600) {
//     time = 0;
//     hours++;
// }
// $('#timer').text(("0" + hours).slice(-2) + ':' + ("0" + Math.trunc(time / 60)).slice(-2) +':' + ("0" + (time % 60)).slice(-2))
// time++;