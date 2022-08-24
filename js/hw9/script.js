//- є масив
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
let listSimpsons = document.createElement(`ul`)
listSimpsons.classList.add(`simpsons-family`)
document.body.appendChild(listSimpsons)
for (const simpson of simpsons) {
    let {name, surname, age, info, photo} = simpson
    let member = document.createElement('li')
    member.classList.add(`member`)
    listSimpsons.appendChild(member)
    let Name = document.createElement(`h2`)
    Name.innerText = name
    let SurName = document.createElement(`h2`)
    SurName.innerText = surname
    let Age = document.createElement(`div`)
    Age.innerText = `${age} yo`
    let Info = document.createElement(`p`)
    Info.innerText = info
    let Img = document.createElement(`img`)
    Img.src = `${photo}`
    member.append(Img,Name,SurName,Age,Info)
}
//Цикл в циклі
// - Є масив
//Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let mainDiv = document.createElement(`div`)
mainDiv.classList.add(`courses`)
document.body.appendChild(mainDiv)
for (const course of coursesArray) {
    let {title, monthDuration, hourDuration, modules} = course
    let divOfCourse = document.createElement(`div`)
    let nameOfCourse = document.createElement(`h2`)
    nameOfCourse.innerText = title
    let divMonthAndHours = document.createElement(`div`)
    divMonthAndHours.classList.add(`month-hours`)
    let month = document.createElement(`div`)
    month.innerText = `Month:${monthDuration}`
    let hours = document.createElement(`div`)
    hours.innerText = `Hours:${hourDuration}`
    let listOfModules = document.createElement(`ul`)
    for (const module of modules) {
        let itemOfModule = document.createElement(`li`)
        itemOfModule.innerText = module
        listOfModules.appendChild(itemOfModule)
    }
    divMonthAndHours.append(month,hours)
    divOfCourse.append(nameOfCourse,divMonthAndHours,listOfModules)
    mainDiv.appendChild(divOfCourse)
}

//- створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let divBlock = document.createElement(`div`)
divBlock.classList.add(`wrap`,`collapse`,`alpha`,`beta`)
divBlock.style.background = `silver`
divBlock.style.height = `25vh`
divBlock.innerText = `STASIK`
divBlock.style.color = `red`
divBlock.style.marginBottom = `20px`
let divBlock2 = divBlock.cloneNode(true)
document.body.append(divBlock, divBlock2)
//- Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let ulForArray = document.createElement(`ul`)
ulForArray.classList.add(`menu`)
document.body.appendChild(ulForArray)
let array = ['Main','Products','About us','Contacts']
for (const string of array) {
    let liForString = document.createElement('li')
    liForString.innerText = string
    ulForArray.appendChild(liForString)
}
//- Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let divMain = document.createElement(`div`)
divMain.classList.add(`main-content`)
document.body.appendChild(divMain)
for (const item of coursesAndDurationArray) {
    let divItem = document.createElement(`div`)
    divItem.classList.add(`item`)
    divItem.innerText = `${item.title} - Duration:${item.monthDuration} month`
    divMain.appendChild(divItem)
}
//- Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
let divForCoursesAndMonth = document.createElement(`div`)
divForCoursesAndMonth.classList.add(`courses-duration`)
document.body.appendChild(divForCoursesAndMonth)
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divForCourseAndDuration = document.createElement(`div`)
    divForCourseAndDuration.classList.add(`item`)
    divForCoursesAndMonth.appendChild(divForCourseAndDuration)
    let {title,monthDuration} = coursesAndDurationArrayElement
    let headForTitle = document.createElement(`h1`)
    headForTitle.innerText = title
    headForTitle.classList.add(`heading`)
    let divForMonth = document.createElement(`p`)
    divForMonth.innerText = `Month: ${monthDuration}`
    divForMonth.classList.add(`description`)
    divForCourseAndDuration.append(headForTitle,divForMonth)
}
//- Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let randomElement = document.createElement(`div`)
randomElement.classList.add('display-random')
randomElement.id = `text`
randomElement.style.height = '200px'
randomElement.style.background = 'red'
randomElement.onclick = function () {
    randomElement.style.display = `none`
}
document.body.appendChild(randomElement)
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let inputAge = document.createElement(`input`)
inputAge.placeholder = `Enter your age`
inputAge.type = `number`
inputAge.classList.add('display-age')
let inputButton = document.createElement(`input`)
inputButton.type = 'button'
inputButton.value = 'Enter'
inputButton.classList.add('display-age')
let resultText = document.createElement(`p`)
document.body.append(inputAge,inputButton,resultText)
inputButton.onclick = () => inputAge.value > 99 ? resultText.innerText = `My respect!` : inputAge.value > 18 ? resultText.innerText = `You are ready?)` : inputAge.value > 0 ? resultText.innerText = `You are so young` : resultText.innerText = `Really?!)`
//*** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let inputRow = document.createElement('input')
inputRow.type = 'number'
inputRow.placeholder = `Enter number of rows`
inputRow.classList.add('display-table')
let inputItems = document.createElement('input')
inputItems.type = 'number'
inputItems.placeholder = `Enter number of items`
inputItems.classList.add('display-table')
let inputValueForItems = document.createElement('input')
inputValueForItems.type = 'text'
inputValueForItems.placeholder = `Enter value for items`
inputValueForItems.classList.add('display-table')
let buttonConfirm = document.createElement('input')
buttonConfirm.type = 'button'
buttonConfirm.value = 'Enter'
buttonConfirm.classList.add('display-table')
document.body.append(inputRow,inputItems,inputValueForItems,buttonConfirm)
buttonConfirm.onclick = () => {
    let tableDiv = document.createElement(`table`)
    document.body.appendChild(tableDiv)
    for (let i = 0; i < inputRow.value; i++) {
        let rowElement = document.createElement('tr')
        for (let j = 0; j < inputItems.value; j++) {
            let valueItems = document.createElement('td')
            valueItems.innerText = inputValueForItems.value
            rowElement.appendChild(valueItems)
        }
        tableDiv.appendChild(rowElement)
    }
}