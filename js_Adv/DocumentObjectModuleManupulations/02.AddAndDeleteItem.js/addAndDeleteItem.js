function addItem() {
    let table = document.getElementById('items');
    let createLi = document.createElement('li');
    let text = document.getElementById('newText').value;
    console.log(text);
    createLi.innerHTML = text + ' <a href="#">[Delete]</a>';
    table.appendChild(createLi);

    createLi.addEventListener('click', function(e) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    })
}