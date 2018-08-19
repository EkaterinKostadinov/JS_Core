function createBook(selector, bookTitle, author, isbn) {
    let counter = 1;
    let numberOfBook = $('<div>').attr('id', `book${counter}`).appendTo(selector);
    $('<p>').attr('class', 'title').text(bookTitle).appendTo(numberOfBook);
    $('<p>').attr('class', 'author').text(author).appendTo(numberOfBook);
    $('<p>').attr('class', 'isbn').text(isbn).appendTo(numberOfBook);

    let select = $('<button>').text('Select').appendTo(numberOfBook);
    select.on('click', () => {
        numberOfBook.css('border', '2px solid blue');
    })

    let deselect = $('<button>').text('Deselect').appendTo(numberOfBook);
    deselect.on('click', () => {
        numberOfBook.css('border', 'none');
    })
}