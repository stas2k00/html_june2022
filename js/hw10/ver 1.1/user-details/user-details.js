//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра
// має детальну інфу про поточний пост.
//Стилизація проєкта -
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .
let userID = JSON.parse(window.localStorage.getItem(`userId`))
fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(response => response.json())
    .then(user => {
        let divForUser = createElement(true,`div`,`user-details`)
        iterKey(user,divForUser)
        let btnForPosts = createElement(true,`input`,`btn-post`,``,'button',`post of current user`)
        btnForPosts.onclick = () => {
            let orderListPosts = document.getElementsByClassName("user-posts")[0]
            orderListPosts ? orderListPosts.remove() : fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`)
                .then(response => response.json())
                .then(posts => {
                    let postsOl = createElement(true,`ol`,`user-posts`)
                    posts.forEach(post => {
                        let postLi = createElement(false,`li`,`post`,`${post.title}`)
                        let linkBtn = createElement(``,`a`,)
                        linkBtn.href = `../post-details/index.html`
                        let postDetailsBtn = createElement(``,`input`,`btn-post-details`,``,`button`,`More details`)
                        postDetailsBtn.onclick = () => {
                            window.localStorage.setItem(`postId`,post.id)
                        }
                        linkBtn.appendChild(postDetailsBtn)
                        postLi.appendChild(linkBtn)
                        postsOl.appendChild(postLi)
                    })
                })
        }
    })