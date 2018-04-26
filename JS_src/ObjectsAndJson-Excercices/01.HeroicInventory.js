function printHeroItems(heroArr) {
    let heroes = [];

    for (const singleHero of heroArr) {
        let [name, level, items] = singleHero.split(' / ');
        let aHero = {};
        aHero['name'] = name;
        aHero['level'] = Number(level);
        aHero['items'] = [];

        if (items !== undefined) {
            items = items.match(/\w+/g);
            for (const item of items) {
                aHero.items.push(item);
            }
        }

        heroes.push(aHero);
    }

    console.log(JSON.stringify(heroes));
}

// printHeroItems(['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']
// )