// Задача 1

// Создать объект pet со свойствами type (тип питомца - кошка/собака/...), name (имя питомца) и sound (издаваемый звук)
// Создать метод объекта say, который в качетсве аргумента принимает текст. При вызове метода pet.say() должна возвращаться строка "<type> <name> говорит <передаваемый текст>". Если передаваемый текст отсутствует, возвращаем издаваемый звук.

// Пример:

// {
//   name: "Бобик",
//   type: "пес",
//   sound: "гав"
// }


// pet.say("мяу") => "пес Бобик говорит мяу"

// pet.say() => "пес Бобик говорит гав"

// let pet = {
//     type: "кошка",
//     name: "риса",
//     sound: "мур",
//     say: function(text) {
//         if (typeof text == "string") {
//             return (`${this.type} ${this.name} говорит ${text}`)
//         } else {
//             return (`${this.type} ${this.name} говорит ${this.sound}`)
//         }
//     }
// }

// console.log(pet.say("мяу"))
// console.log(pet.say())

// Задача 2

// let basketMarket = {
//     "potato": "овощи",
//     "carrot": "овощи",
//     "banana": "фрукты",
//     "orange": "фрукты",
//     "apple": "фрукты",
//     "strawberry": "ягоды",
//     "tomato": "овощи",
//     "melon": "фрукты",
//     "lemon": "фрукты",
//     basketSort: function () {
//         newbasket = {};
//         for (let key in this) {
//             if (newbasket[this[key]] !== undefined) {
//                 newbasket[this[key]] = newbasket[this[key]] + 1;
//             } else {
//                 newbasket[this[key]] = 1;
//             }
//        }
//        return newbasket
//     }
// }

// console.log(basketMarket.basketSort())

// Задача 3

// let cars = {
//     Audi: {
//         color: "blue",
//         country: "German",
//         years: 1992,
//     },
//     BMW: {
//         color: "green",
//         country: "German",
//         years: 1988,
//     },
//     MercedesBenz: {
//         color: "red",
//         country: "German",
//         years: 1999,
//     },
//     Ford: {
//         color: "black",
//         country: "USA",
//         years: 2001,
//     },
//     Nissan: {
//         color: "yellow",
//         country: "Japan",
//         years: 2005,
//     },
//     KIA: {
//         color: "white",
//         country: "Korea",
//         years: 2007,
//     },
//     Renault: {
//         color: "blue",
//         country: "France",
//         years: 2003,
//     },
//     Fiat: {
//         color: "yellow",
//         country: "Italia",
//         years: 1995,
//     },
//     Skoda: {
//         color: "blue",
//         country: "Czech Republic",
//         years: 1997,
//     },
//     Rover: {
//         color: "black",
//         country: "UK",
//         years: 2000,
//     },
// };

// function findOldAgeCar(findOldAgeCarValue) {
//     let carsArray = Object.entries(cars);
//     carsArray.sort((a, b) => a[1].years - b[1].years);
//     let maxOldAgeCars = carsArray.slice(0, findOldAgeCarValue);
//     let result = Object.fromEntries(maxOldAgeCars);
//     console.log("Список самых старых машин",result);
// }

// function findNewAgeCar(findNewAgeCarValue) {
//     let carsArray = Object.entries(cars);
//     carsArray.sort((a, b) => b[1].years - a[1].years);
//     let maxNewAgeCars = carsArray.slice(0, findNewAgeCarValue);
//     let result = Object.fromEntries(maxNewAgeCars);
//     console.log("Список самых новых машин",result);
// }

// findOldAgeCar(3);
// findNewAgeCar(3);