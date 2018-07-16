function initializeTable() {
    function addCountryToTable(country, town) {
        $('#countriesTable').append(`<tr><td>${country}</td><td>${town}</td>>
        <td><a href="#">[Up]</a><a href="#">[Down]</a><a href="#">[Delete]</a></td></tr>`);
    }

    addCountryToTable('Bulgaria', 'Sofia')
    addCountryToTable('Germany', 'Berlin')
    addCountryToTable('Russia', 'Moscow')

    $("#createLink").on('click', createCountry)

    function createCountry() {
        let country = $('#newCountryText').val();
        let town = $('#newCapitalText').val();
        $('#countriesTable').append(`<tr><td>${country}</td><td>${town}</td>><td>
        <a href="#">[Up]</a><a href="#">[Down]</a><a href="#">[Delete]</a></td></tr>`);
    }

    $('#countriesTable').delegate('a:contains("[Delete]")', "click", function () {
        $(this).parent().parent().remove();
    });

    $('#countriesTable').delegate('a:contains("[Up]")', "click", function () {
        var row = $(this).parents("tr:first");
        if (row.index() !== 2) {
            row.insertBefore(row.prev())
        }
    })

    $('#countriesTable').delegate('a:contains("[Down]")', "click", function () {
        var row = $(this).parents("tr:first");
        row.insertAfter(row.next());
        
    })
}