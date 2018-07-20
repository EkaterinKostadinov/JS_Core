function toggle() {
    let more = document.getElementsByTagName('span')[0];
    if (more.innerHTML === 'More') {
        more.innerHTML = 'Less'
        let text = document.getElementById('extra');
        text.style.display = 'block'
    } else {
        more.innerHTML = 'More'
        let text = document.getElementById('extra');
        text.style.display = 'none'
    }
}