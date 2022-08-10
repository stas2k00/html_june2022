// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let arrayString = ['hello world','lorem ipsum','javascript is cool']
let stringLength = []
let stringUpperCase = []
let stringLowerCase = []
arrayString.forEach(string => {stringLength.push(string.length); stringUpperCase.push(string.toUpperCase()); stringLowerCase.push(string.toLowerCase())})
console.log(arrayString, stringLength, stringUpperCase, stringLowerCase)
let str = ' dirty string   '
str = str.substring(str.indexOf('d'),str.indexOf('g')+1);
console.log(str)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let stringToArray = (str) => str.split(' ')
console.log(stringToArray('Ревуть воли як ясла повні'))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let arrayNumbers = [10,8,-7,55,987,-1011,0,1050,0]
arrayString = arrayNumbers.map(num => ''+num)
console.log(arrayString)
let sortNums = (nums, d) => d === 'up' ? nums.sort((num1, num2) => num1 - num2) : d === 'down' ? nums.sort((num1, num2) => num2 - num1) : false
console.log(sortNums(arrayNumbers,'up'))
console.log(sortNums(arrayNumbers,'down'))

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     Suit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let playingCards = []
let valuesCards = ['jack','queen','king','ace']
for (let i = 0; i < 9; i++) valuesCards.splice(i, 0 ,i+2+'')
let cardSuit = ['spade', 'diamond','heart', 'clubs']
let colorCard = ['red','black']
for (let j = 0; j < cardSuit.length; j++) {
    for (let k = 0; k < valuesCards.length; k++) {
        playingCards.push({
            suit: cardSuit[j],
            value: valuesCards[k],
            color: cardSuit[j] === 'diamond' || cardSuit[j] === 'heart' ? colorCard[0] : colorCard[1]
        })
    }
}
console.log(playingCards.find(card => card.value === 'ace'));
console.log(playingCards.filter(card => card.value === '6'));
console.log(playingCards.filter(card => card.color === 'red'));
console.log(playingCards.filter(card => card.suit === 'diamond'));
console.log(playingCards.filter(card => card.suit === 'clubs' && (card.value >= '9' || card.value === '10')));
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduceCards = playingCards.reduce((accumulator, card) => {
    card.suit === 'diamond' ? accumulator.diamonds.push(card.value) : false
    card.suit === 'spade' ? accumulator.spades.push(card.value) : false
    card.suit === 'heart' ? accumulator.hearts.push(card.value) : false
    card.suit === 'clubs' ? accumulator.clubs.push(card.value) : false
    return accumulator
},{spades:[], diamonds:[], hearts:[], clubs:[]})
console.log(reduceCards)
