//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
function iterKey (obj) {
    for (const [key, value] of Object.entries(obj)) {
        let divKey = document.createElement(`div`)
        let divNameOfKey = document.createElement(`div`)
        let divNameOfValue = document.createElement(`div`)
        divKey.classList.add(`key`)
        divNameOfKey.classList.add(`nameOfKey`)
        divNameOfValue.classList.add(`valueOfKey`)

        if (typeof value === "object") {
            let divKeys = document.createElement(`div`)
            divKeys.classList.add(`keys`)
            divKeys.innerText = key
            document.body.appendChild(divKeys)
            iterKey(value)
        } else {
            divNameOfKey.innerText = `${key}`
            divNameOfValue.innerText = `${value}`
            divKey.append(divNameOfKey,divNameOfValue)
            document.body.appendChild(divKey)
        }
    }

}
let userId = JSON.parse(window.localStorage.getItem(`userId`))
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        iterKey(user)
        let btnPost = document.createElement(`input`)
        btnPost.type = `button`
        btnPost.value = `posts of current user`
        btnPost.classList.add(`btnPost`)
        document.body.appendChild(btnPost)
        btnPost.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    let listOfPosts = document.createElement(`ol`)
                    listOfPosts.classList.add(`posts-titles`)
                    document.body.appendChild(listOfPosts)
                    posts.forEach(post => {
                        let postLi = document.createElement('li')
                        postLi.classList.add(`title`)
                        postLi.innerText = post.title
                        let bthPostDetailed = document.createElement(`a`)
                        bthPostDetailed.onclick = () => {
                            window.localStorage.setItem(`postId`,`${post.id}`)
                        }
                        bthPostDetailed.href = `../post-user/post-details.html`
                        bthPostDetailed.innerText = `More info`
                        bthPostDetailed.classList.add(`btnMoreInfo`)
                        postLi.appendChild(bthPostDetailed)
                        listOfPosts.appendChild(postLi)
                    })
                })
        }
    })