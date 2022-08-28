//в index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 вивести id,name всіх user в index.html. окремий блок для кожного user.
// 3 додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра
// має детальну інфорацію про об'єкт на який клікнул
//Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {
        let listUser = createElement(true,`div`,`users`)
        users.forEach(user => {
            let divForUser = createElement(false,`div`,`user`)
            let divForUserId = createElement(false,`h2`,`user-id`,`${user.id}`)
            let divForUserName = createElement(false,`h2`,`user-name`,`${user.name}`)
            let linkForUserDetails = createElement(false,`a`)
            linkForUserDetails.href = `../user-details/index.html`
            let moreInfoBtn = createElement(false,`input`,`btn-more`,``,`button`,`More Info`)
            linkForUserDetails.appendChild(moreInfoBtn)
            moreInfoBtn.onclick = () => {
                window.localStorage.clear()
                window.localStorage.setItem(`userId`,`${user.id}`)
            }
            divForUser.append(divForUserId,divForUserName,linkForUserDetails)
            listUser.append(divForUser)
        })
    })