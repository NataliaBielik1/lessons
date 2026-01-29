// "use strict";
// let numOne = "1"
// let numTwo = 3
// let numThree = 3
// let numFour = 4


// console.log(numTwo !== 3)
// console.log(numOne && numThree)
// console.log(numFour > 6)
// console.log(Boolean(numOne))
// let someArray = [10, "Name", true, "Hello!"]
// someArray.forEach((item, index) => {
//     console.log(item);
//     console.log(index)
// })
// let usersNames = ["Вася", "Петро", "Ірина"]
// console.log(usersNames)
// usersNames.push("Жека")
// console.log(usersNames)
// // console.log(usersNames.includes("Петро"))
// // console.log(usersNames.includes(20))
// let usersNamesString = usersNames.join(',')
// console.log(usersNamesString)
// function showMessage(someText = "Текст за замовченням") {
//     console.log(someText)
// }

// showMessage();
// showMessage("My text")
// let someVar = 0;
// ++someVar;

// if (someVar) {
//     console.log(someVar);
// }
// for (let i = 1; i <= 10; ++i) {
//     console.log(`Пункт${i}`)
// }
// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
//     console.log('000');
// }
// function divide(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return ` Результат ділення: некоректні дані`;
//     }
//     if (b === 0) {
//         return `Ділення на нуль неможливе`;
//     }
//     return `Результат ділення: ${a / b}`;
// }

// console.log(divide(10, 2));
// console.log(divide(5, 0));
// console.log(divide(10));
// console.log(divide());
// console.log(divide("10", 2));
// let someArray = [5, true, "Sam", "Hello", 10]
// someArray(item => {
//     if (item === 10) {
//         console.log(item)
//     }
// })

let someArray = [5, true, "Sam", "Hello", 10]
someArray.forEach((item) => {
    if (item === 10) {
        console.log(item);
    }
});
