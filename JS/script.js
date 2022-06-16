//1

//function calcSum(a, b, ...other) {
//     console.log(other);
//     return a + b;
// }

// console.log(calcSum(10, 20, 50, 100));

//2

// let drivers = ["Dominic", "Brian", "Letty", "Roman"];
// let antagonists = ["Deckard", "Luke"];

// concat
//let family = []
//console.log(family.concat(drivers, antagonists));

// push.apply
//let family = []
//family.push(...drivers, ...antagonists);
//console.log(family);

// spread
//let family = [...drivers, ...antagonists]
//console.log(family);

//splice
//let family = []
//family.splice(family.length, 0, ...drivers, ...antagonists)
//console.log(family);

//forEach
// let family = [];
// drivers.forEach(item => family.push(item));
// antagonists.forEach(item => family.push(item));
//console.log(family);

//3

// let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"];

// let carUnique = [...new Set(cars)];
// console.log(carUnique);

//4

//function showContryAndCity(country) {
// return function(city) {
// return [country, city];
// }
//}
//ContryAndCity = showContryAndCity('Грузия');
//console.log(ContryAndCity('Батуми'));

//5

// const time = 1654420481877;
// const timeFullFormat = new Date(time);

// function formatDate(date) {

//     let dd = date.getDate();
//     if (dd < 10) dd = '0' + dd;

//     let mm = date.getMonth() + 1;
//     if (mm < 10) mm = '0' + mm;

//     let yyyy = date.getFullYear();

//     return yyyy + '.' + mm + '.' + dd;
// }

// console.log(timeFullFormat);
// console.log(formatDate(timeFullFormat));