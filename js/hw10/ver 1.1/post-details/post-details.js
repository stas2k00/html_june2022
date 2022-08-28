//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//Стилизація проєкта -
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
let postId = JSON.parse(window.localStorage.getItem(`postId`))
let userId = JSON.parse(window.localStorage.getItem(`userId`))
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(posts => {
        let post = posts.find(post => post.id === postId)
        let postDiv = createElement(true,`div`,`post`)
        iterKey(post,postDiv)
        let commentsDiv = createElement(true,`div`,`comments`)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                iterKey(comments,commentsDiv)
                let commentsTitle = createElement(``,`div`,`comments-title`,`COMMENTS`)
                commentsDiv.appendChild(commentsTitle)
            })
    })