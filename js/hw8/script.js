// - Створити функцію конструктор для об'єктів User з полями id, name, username , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, username, email, phone) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
}
let arrayUsers = [];
let arrayNames = ['Vladik', 'Stasik', 'Maxim', 'Kolya', 'Vasya', 'Ivan', 'Oleh', 'Petro', 'Illya', 'Oleksii'];
for (let i = 0; i < 10; i++) {
    arrayUsers.push(new User(
        Math.round(Math.random()*1000),
        arrayNames[i],
        `${arrayNames[i].toLowerCase()}${i + 1}`,
        `user${arrayNames[i]}@gmail.com`,
        `+38096${Math.round(Math.random() * 10 ** 7)}`)
    );
}
console.log(arrayUsers)
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arrayUsers.filter((user) => user.id % 2 === 0 ?  user : false))
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(JSON.parse(JSON.stringify(arrayUsers)).sort((a, b) => a.id-b.id))
// - створити класс для об'єктів Client з полями id, name, username , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, username, email, phone, order) {
        User.apply(this, arguments);
        this.order = order;
    }
}
let arrayClients = [];
let orders = ['car','guns','home','food','shoes','clothes','phone','laptop','desktop','one wheel']
for (const user of arrayUsers) {
    let {id, name, username, email, phone} = user
    arrayClients.push(new Client(id, name, username, email, phone, orders.slice(0,Math.round(Math.random()*9)+1)));
}
console.log(arrayClients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(JSON.parse(JSON.stringify(arrayClients)).sort((a, b) => a.order.length - b.order.length))
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function FuncCar(model, brand, yearOfManufacture, maxSpeed, engineCapacity) {
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

let car1 = new FuncCar('S500','MB',2012,250,4500);
console.log(car1)
car1.drive()
car1.info()
car1.increaseMaxSpeed(50)
car1.changeYear(2018)
car1.addDriver({
    name: 'Vasya',
    age:33
})
console.log(car1)
//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class ClassCar {
    constructor(model, brand, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    info = () => console.log(`Model - ${this.model}, Brand - ${this.brand}, Year of Manufacture - ${this.yearOfManufacture},
                 Max Speed - ${this.maxSpeed}, Engine Capacity - ${this.engineCapacity}`)
    increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed
    changeYear = (newValue) => this.yearOfManufacture = newValue
    addDriver = (driver) => this.driver = driver
}

let car2 = new ClassCar('Q8','Audi',2022,350,4700)
console.log(car2)
car2.drive()
car2.info()
car2.increaseMaxSpeed(50)
car2.changeYear(2018)
car2.addDriver({
    name: 'Vasya',
    age:33
})
console.log(car2)
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Princess(name, age, sizeOfFoot) {
    this.name = name;
    this.age = age;
    this.sizeOfFoot = sizeOfFoot;
}

function Prince(name, age, sizeOfShoe) {
    this.name = name;
    this.age = age;
    this.sizeOfShoe = sizeOfShoe;
}

let namesOfPrinces = ['Ivan','Ihor','Illya','Isac','Ilan','Iman','Ired','Israel','Ian','Ibrahim']
let namesOfPrincess = ['Izabella','Ivanna','Irene','India','Ivory','Imani','Itzel','Ivey','Indiana','Italia']
let arrayOfPrinces = []
let arrayOfPrincess = []

for (let i = 0; i < 10; i++) {
    arrayOfPrincess.push(new Princess(namesOfPrincess[i],Math.round(Math.random()*20+18),Math.round(Math.random()*10+25)))
}
let randomPrincess = JSON.parse(JSON.stringify(arrayOfPrincess)).sort((a, b) => a.age - b.age)
for (let i = 0; i < 10; i++) {
    arrayOfPrinces.push(new Prince(namesOfPrinces[i],Math.round(Math.random()*5+18),randomPrincess[i].sizeOfFoot))
}
let arrayOfCouples = []
for (let i = 0; i < arrayOfPrinces.length; i++) {
    let j = 0
    while (!arrayOfCouples[i]) {
        if (arrayOfPrinces[i].sizeOfShoe === arrayOfPrincess[j].sizeOfFoot && arrayOfPrincess[j].couple !== true) {
            arrayOfCouples[i] = `${arrayOfPrinces[i].name}+${arrayOfPrincess[j].name}`;
            arrayOfPrinces[i].couple = true
            arrayOfPrincess[j].couple = true
        } else {
            j+=1
        }
    }
}
let arrayOfCouples2 = []
arrayOfPrincess.forEach(princess =>arrayOfPrinces.find((prince , index) => {
    if (princess.sizeOfFoot === prince.sizeOfShoe){
        arrayOfCouples2.push(`${prince.name}+${princess.name}`)
        arrayOfPrincess.slice(index,index+1)
        return 1
    }
}))
console.log(arrayOfCouples)
console.log(arrayOfCouples2)