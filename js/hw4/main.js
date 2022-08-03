//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 1; i <= 10; i++) {
    document.write(`
    <div>
    Okten
    </div>
    `)
}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i <= 10; i++) {
    document.write(`
    <div>
    Okten [${i}]
    </div>
    `)
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 1;
while (i <= 20) {
    document.write(`
    <div>
    <h1>Vasya</h1>
    </div>
    `)
    i++
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 1;
while (i <= 20) {
    document.write(`
    <div>
    <h1>Order ${i}</h1>
    </div>
    `)
    i++
}
//- Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (const listOfItem of listOfItems) {
    document.write(`
    <li>${listOfItem}</li> 
    `)
}
document.write(`</ul>`);
//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// 			let products = [
// 				{
// 					title: 'milk',
// 					price: 22,
// 					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// 				},
// 				{
// 					title: 'juice',
// 					price: 27,
// 					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// 				},
// 				{
// 					title: 'tomato',
// 					price: 47,
// 					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// 				},
// 				{
// 					title: 'tea',
// 					price: 15,
// 					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// 				},
// 			];
//
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`
    <div class="product-card">
        <h3 class="product-title">${product.title} Price - ${product.price}</h3>
        <img src=${product.image} alt="" class="product-image">
    </div>
    `)
}
//є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    if (user.status) {
        document.write(`<div>${user.name} status = true</div>`)
    }
}
for (const user of users) {
    if (!user.status) {
        document.write(`<div>${user.name} status = false</div>`)
    }
}
for (const user of users) {
    if (user.age > 30) {
        document.write(`<div>${user.name} age = ${user.age}</div>`)
    }
}
//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//  2. Вивести за допомогою console.log кожен третій елемен
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arrNum = [];
let evenNum = [];
for (i = 0; i < 139; i++) {
    i < 100 ? i % 2 === 0 ? arrNum[i] = i + 2 : arrNum[i] = i + 2 : i < 120 ? arrNum[i] = Math.floor(Math.random()*100) : arrNum[i] = 8 + Math.floor(Math.random()*100)
}
let j = 0;
for (i = 2; i < arrNum.length; i = i + 3) {
    console.log(`i = ${i} - arrayNumber = ${arrNum[i]}`);
    if (arrNum[i] % 2 === 0) {
        console.log(`Even Parity: i = ${i} - arrayNumber = ${arrNum[i]}`);
        evenNum[j] = arrNum[i];
        j++
    }
}
for (i = 0; i < arrNum.length; i++) {
    if (arrNum[i+1] % 2 === 0) {
        console.log(arrNum[i])
    }
}
let sum = 0;
let priceList = [100,250,50,168,120,345,188];
for (const price of priceList) {
    sum = sum + price
    console.log(price)
}
console.log(`${priceList} Average Price equal ${Math.round(sum/priceList.length)}`)
arrNum = [];
for (i = 0; i < 100; i++) {
    arrNum[i] = Math.floor(Math.random()*1000)
}
let newArray = [];
for (i = 0; i < arrNum.length; i++) {
    newArray[i] = arrNum[i] * 5
}
sum = 0;
arrNum = ['Stasik',1,2,'Pesik',false,3];
for (const item of arrNum) {
    if (item === +item) {
        sum = sum + item
    }
}
//- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];
for (i = 0; i < usersWithId.length; i++) {
    usersWithCities[i] = usersWithId[i];
    for (j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithCities[i].address = citiesWithId[j]
        }
    }
}
console.log(usersWithCities)
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
arrNum = [];
for (i = 0; i < 10; i++) {
    arrNum[i] = Math.round(Math.random()*1000);
    if (arrNum[i] % 2 === 0) {
        console.log(`Even parity Number = ${arrNum[i]}`)
    }
}
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
newArray = [];
for (i = 0; i < arrNum.length; i++) {
    newArray[i] = arrNum[i]
}
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
newArray = [ 'a', 'b', 'c'];
let word = '';
for (i = 0; i < newArray.length; i++) {
    word = word + newArray[i];
}
console.log(word);
word = '';
i = 0
while (i < newArray.length) {
    word = word + newArray[i];
    i++
}
console.log(word);
word = '';
for (const item of newArray) {
    word = word + item;
}
console.log(word);
