let copy = (value) => JSON.parse(JSON.stringify(value))
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = []
for (let i = 10; i > 0; i--) users.push(new User (i,`Name${i}`,`surname${i}`,`user${i}@gmail.com`,`+38096503574${i}`))
console.log(users)
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0 ? value : false))
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(copy(users).sort((a, b) => a.id - b.id))
//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id,name,surname,email,phone,order) {
        User.apply(this, arguments)
        this.order = order
    }
}
let clients = []
let order = []
for (let i = 0; i < 10; i++) order.push(`apple`)
for (let i = 10; i > 0; i--) clients.push(new Client (i,`Name${i}`,`surname${i}`,`user${i}@gmail.com`,`+38096503574${i}`,order.slice(0,i)))
console.log(clients)
console.log(copy(clients).sort((a, b) => a.order.length - b.order.length))
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function CarFunc (model, brand, yearOfManufacture, maxSpeed, engineCapacity){
    this.model = model;
    this.brand = brand;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    this.info = () => console.log(`Model - ${model}, Brand - ${brand}, Year of Manufacture - ${yearOfManufacture}, Max Speed - ${maxSpeed}, Engine Capacity - ${engineCapacity}`)
    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed
    this.changeYear = (newValue) => this.yearOfManufacture = newValue
    this.addDriver = (driver) => this.driver = driver
}
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, brand, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    info = () => console.log(`Model - ${model}, Brand - ${brand}, Year of Manufacture - ${yearOfManufacture}, Max Speed - ${maxSpeed}, Engine Capacity - ${engineCapacity}`)
    increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed
    changeYear = (newValue) => this.yearOfManufacture = newValue
    addDriver = (driver) => this.driver = driver
}
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Princess(name, age, sizeOfFoot) {
    this.name = name;
    this.age = age;
    this.sizeOfFoot = sizeOfFoot
}
class Prince {
    constructor(name,age,sizeOfShoe) {
        this.name = name;
        this.age = age;
        this.sizeOfShoe = sizeOfShoe
    }
}
let princess = []
let prince = []
let couples = []
let sizeOfFoot = []
for (let i = 0; i < 10; i++)  sizeOfFoot.push(25+i)
for (let i = 1; i < 11; i++) {
    princess.push(new Princess(`Name${i}`, 18 + i, sizeOfFoot[i - 1]))
    prince.push(new Prince(`Name${i}`, 24 + i, sizeOfFoot[sizeOfFoot.length - i]))
}
prince.forEach(pr => princess.forEach(prs => pr.sizeOfShoe === prs.sizeOfFoot ? couples.push([pr,prs]) : false))
console.log(couples)
couples = []
prince.forEach(pr => couples.push([pr,princess.find(prs => pr.sizeOfShoe === prs.sizeOfFoot)]))
console.log(couples)
