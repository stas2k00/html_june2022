//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let userId = JSON.parse(window.localStorage.getItem(`userId`))
let postId = JSON.parse(window.localStorage.getItem(`postId`))
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(posts => {
        let findPost = posts.find(value => value.id === postId)
        let postDiv = document.createElement(`div`)
        postDiv.classList.add(`post`)
        let {id, userId, title,body} = findPost
        let idDiv = document.createElement(`div`)
        idDiv.innerText = `Post ID:${id}`
        idDiv.classList.add(`postId`)
        let userIdDiv = document.createElement(`div`)
        userIdDiv.innerText = `User ID:${userId}`
        userIdDiv.classList.add(`userId`)
        let titleDiv = document.createElement(`div`)
        titleDiv.innerText = `Title: ${title}`
        titleDiv.classList.add(`title-post`)
        let bodyDiv = document.createElement(`div`)
        bodyDiv.innerText = `Description: ${body}`
        bodyDiv.classList.add(`description-post`)
        postDiv.append(userIdDiv,idDiv,titleDiv,bodyDiv)
        document.body.appendChild(postDiv)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                let commentsDiv = document.createElement(`div`)
                commentsDiv.classList.add(`comments`)
                let titleComments = document.createElement(`p`)
                titleComments.classList.add(`title-comments`)
                titleComments.innerText = `COMMENTS`
                commentsDiv.appendChild(titleComments)

                comments.forEach(comment => {
                    let {postId,id,name,email,body} = comment
                    let commentDiv = document.createElement(`div`)
                    commentDiv.classList.add(`comment`)
                    let postIdDiv = document.createElement(`div`)
                    postIdDiv.classList.add(`postId`)
                    postIdDiv.innerText = `Post ID: ${postId}`
                    let idDiv = document.createElement(`div`)
                    idDiv.classList.add(`id-comment`)
                    idDiv.innerText = `ID: ${id}`
                    let nameDiv = document.createElement(`div`)
                    nameDiv.classList.add(`name`)
                    nameDiv.innerText = `Name: ${name}`
                    let emailDiv = document.createElement(`div`)
                    emailDiv.classList.add(`email`)
                    emailDiv.innerText = `Email: ${email}`
                    let bodyDiv = document.createElement(`div`)
                    bodyDiv.classList.add(`description`)
                    bodyDiv.innerHTML = `Commentar: ${body}`
                    commentDiv.append(postIdDiv,idDiv,nameDiv,emailDiv,bodyDiv)
                    commentsDiv.appendChild(commentDiv)
                })
                document.body.appendChild(commentsDiv)
            })
    })
