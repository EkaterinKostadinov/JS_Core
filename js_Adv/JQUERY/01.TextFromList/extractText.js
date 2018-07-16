function extractText() {
    let lists = $('#items li').toArray().map(li => $(li).text());
    $('#result').text(lists.join(', '))
}