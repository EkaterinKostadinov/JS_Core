function search() {
    let typedText = $('#searchText').val();
    let counter = 0;
    let matchedText = $(`li:contains(${typedText})`)
    if (typedText === '') {
        $('#result').text('0 matches found');
    } else {
        $('#result').text(`${matchedText.length} matches found`);
    }
    matchedText.css('font-weight','bold')
}