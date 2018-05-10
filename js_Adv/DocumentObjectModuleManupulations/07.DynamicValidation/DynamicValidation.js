function validate() {
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    let inputEmail = document.getElementById('email');
    inputEmail.addEventListener('change', () => {
        validate();
    })

    function validate() {
        if (reg.test(inputEmail.value)) {
            inputEmail.className = '';
        } else {
            inputEmail.className = 'error';
        }
    }
}