function addItem() {
    let list = document.getElementById('items');
    let newLi = document.createElement('li');
    let text = document.getElementById('newItemText').value;

    newLi.innerHTML = text;
    list.appendChild(newLi)
    document.getElementById('newItemText').value = null;
}