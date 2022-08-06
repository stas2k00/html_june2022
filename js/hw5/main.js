let areaRectangle = (a, b) => a * b
let areaCircle = (r) => Math.PI * r ** 2
let areaCylinder = (r, h) => 2 * Math.PI * r * h + 2 * Math.PI * r ** 2

function logItemOfArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

let paragraph = (text) => document.write(`<p>${text}<p>`)

function ul3Li(text) {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}

function writerOfUl(text, numOfLi) {
    document.write(`<ul>`)
    for (let i = 0; i < numOfLi; i++) document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

function writerOfOl (array) {
    document.write(`<ol>`)
    for (let i = 0; i < array.length; i++) document.write(`<li>${array[i]}</li>`)
    document.write(`</ol>`)
}

function writerOfKey (array) {
    for (const arrayElement of array) {
        document.write(`
            <div class="user">
                <span class="key">ID</span> <div class="id">${arrayElement.id}</div>
                <span class="key">Name</span> <div class="name">${arrayElement.name}</div>
                <span class="key">Age</span> <div class="age">${arrayElement.age}</div>
            </div>
         `)
    }
}

function minNumOfArray (numbers) {
    let min = numbers[0]
    for (const number of numbers) number < min ? min = number : false
    return min
}

function sumOfArray (numbers) {
    let sum = 0
    for (const number of numbers) sum+=number
    return sum
}