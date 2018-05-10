function attachGradientEvents() {
    let box = document.getElementById('gradient-box');
    let gradient = 0;

    box.addEventListener('mousemove', (event) => {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    });

    box.addEventListener('mouseout', (event) => {
        document.getElementById('result').textContent = '';
    })
}