function increment(selector) {
    let textArea = $('<textarea>').addClass('counter')
        .val(0)
        .attr('disabled', true)
        .appendTo(selector);

    let incrementBtn = $('<button>').addClass('btn')
        .attr('id', 'incrementBtn')
        .text('Increment')
        .appendTo(selector);

    let addBtn = $('<button>').addClass('btn')
        .attr('id', 'addBtn')
        .text('Add')
        .appendTo(selector);

    let list = $('<ul>').addClass('results')
        .appendTo(selector);

    let counter = 0;
    incrementBtn.on('click', function () {
        counter++;
        textArea.val(counter)
    })

    addBtn.on('click', function () {
        $('<li>').text(counter)
        .appendTo(list)
    })
}