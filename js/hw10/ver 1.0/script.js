// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {
        let usersDiv = document.createElement(`div`)
        usersDiv.classList.add(`users`)
        document.body.appendChild(usersDiv)
        users.forEach(user => {
            let userDiv = document.createElement(`div`)
            userDiv.classList.add(`user`)
            usersDiv.appendChild(userDiv)
            let idDiv = document.createElement(`h2`)
            idDiv.innerText = user.id
            idDiv.classList.add(`id`)
            let nameDiv = document.createElement(`h2`)
            nameDiv.innerText = user.name
            nameDiv.classList.add(`name`)
            let buttonMore = document.createElement(`a`)
            buttonMore.innerText = `More info`
            buttonMore.classList.add(`btn-more`)
            buttonMore.href = `./user/user-details.html`
            buttonMore.onclick = () => {
                window.localStorage.setItem(`userId`,`${user.id}`)
            }
            userDiv.append(idDiv, nameDiv, buttonMore)
        })
    })