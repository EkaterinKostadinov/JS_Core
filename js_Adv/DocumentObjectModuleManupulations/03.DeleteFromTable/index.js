function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value
    let elements = document.getElementById('customers').getElementsByTagName('tr');
    let emailsAndNames = document.getElementsByTagName('td')

    for (const e of emailsAndNames) {
        if (e.textContent === email) {
            e.parentNode.parentNode.removeChild(e.parentNode);
            document.getElementById('result').innerHTML = 'deleted';
            return
        }
    }
    document.getElementById('result').innerHTML = 'Not found.';
}