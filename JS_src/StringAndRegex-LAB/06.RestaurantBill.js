function printBill(order) {
    let strs = order.join(',').split(',').filter(x => x != '');
    let products = [];
    let sum = 0;
    for (let i = 0; i < strs.length; i++) {
        if (i % 2 == 0) {
            products.push(strs[i]);
        } else {
            sum += Number(strs[i]);
        }
    }
    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`);
}

//printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])