function addItem(params) {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');
    let option = document.createElement("option");
    option.text = text.value;
    option.value = value.value;
    text.value = '';
    value.value = '';
    menu.appendChild(option)
}