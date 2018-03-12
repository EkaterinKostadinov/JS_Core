function lastDay(date) {
    let day = date[0];
    let month = date[1];
    let year = date[2];

    let days = new Date(year, month - 1, 0).getDate();
    console.log(days);
}