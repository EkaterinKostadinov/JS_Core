function attachEvents() {
    let links = $('a.button');
    links.on('click', function (event) {
        links.removeClass('selected')
        $(event.target).addClass('selected') 
    })
}