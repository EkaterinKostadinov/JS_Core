function validate() {
    let valid = true;

    function validateUsername() {
        let usernamePattern = /^[A-Za-z\d]{3,20}$/g;
        let username = $('#username').val();
        if (!usernamePattern.test(username)) {
            $('#username').css('border-color', 'red');
            valid = false;
        } else {
            $('#username').css('border-color', '');
        }
    }

    function validateEmail() {
        let emailPattern = /^.*\@(\.*).*\..*$/g;
        let email = $('#email').val();
        if (!emailPattern.test(email)) {
            $('#email').css('border-color', 'red');
            valid = false;
        } else {
            $('#email').css('border-color', '');
        }
    }

    function validatePassword() {
        let passwordPattern = /^[\w+]{5,15}$/g;
        let password = $('#password').val();
        let confirmPassword = $('#confirm-password').val();
        if (password === confirmPassword) {
            if (!passwordPattern.test(password)) {
                $('#password').css('border-color', 'red');
                $('#confirm-password').css('border-color', 'red');
                valid = false;
            } else {
                $('#password').css('border-color', '');
                $('#confirm-password').css('border-color', '');
            }
        } else {
            $('#password').css('border-color', 'red');
            $('#confirm-password').css('border-color', 'red');
            valid = false;
        }
    }

    $('#company').change(function () {
        if ($('#company').is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    });

    function validateCompanyNumber() {
        if ($('#company').is(':checked')) {
            let companyNumberPattern = /^\d{4}$/g;
            let companyNumber = $('#companyNumber').val();
            if (!companyNumberPattern.test(companyNumber)) {
                $('#companyNumber').css('border-color', 'red');
                valid = false;
            } else {
                $('#companyNumber').css('border-color', '');
            }
        }
    }

    $('#submit').on('click', function (event) {
        event.preventDefault();
        validateUsername();
        validateEmail();
        validatePassword();
        validateCompanyNumber();
        if (valid) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }
    });
}