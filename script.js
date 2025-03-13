let blogs = document.querySelector("main")
let start = document.getElementById("start")
let proname = document.getElementById("proname")
let user = document.getElementById("user")
let followblogger = document.getElementById("followblogger")
let seeall = document.getElementById("seeall")
let morepeople = document.getElementById("morepeople")
let inputs = document.getElementById("inputs")
let goback = document.getElementById("gobackbtn")
let addpost = document.getElementById("addpostbtn")
let inptopic = document.getElementById("inptopic")
let img = document.getElementById("inpimg")
let description = document.getElementById("inpdescrip")
let inpsource = document.getElementById("inpsource")
let msg = document.getElementById("postadded")
let likepost = document.getElementById("like")
let sharepost = document.getElementById("share")
let commentpost = document.getElementById("comment")
let coNo = document.getElementById("coNo")
let react = document.getElementById("reactions")
let commentarea = document.getElementById("addcommentarea")
let cancelcomment = document.getElementById("cancelcomment")
let addcommentbtn = document.getElementById("addcommentbtn")
let commentcontent = document.getElementById("commentcontent")
let commentsblock = document.getElementById("commentsblock")
let displaycomments = document.getElementById("displaycomments")
let reacted = document.getElementById("reacted")
let search = document.getElementById("search")
let all = document.getElementsByTagName("body")[0]
let linkedin = document.getElementById("linkedin")

let addcomments = function(){

    let post = document.createElement("div")
    post.id = "post"
    post.style.marginTop = "10px"
    post.style.border = "1px solid"
    post.style.padding = "5px"
    post.style.borderRadius = "10px"

    let article = document.createElement("div")
    article.id = "article"
    article.classList.add("row")

    let information = document.createElement("div")
    information.id = "information"
    information.classList.add("col")

    let userimg = document.createElement("div")
    userimg.id = "userimg"
    userimg.style.marginRight = "3px"

    userimg.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="${user.getAttribute("fill")}" style="background-color:${user.style.backgroundColor};" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
    </svg>`

    let info = document.createElement("div")
    info.id = "info"

    let postheader = document.createElement("div")

    let name = document.createElement("span")
    name.id = "name"
    name.innerText = proname.innerText
    name.style.display = "block"

    let followers = document.createElement("span")
    followers.id = "followers"
    followers.innerText = "5294 followers"

    let clock = document.createElement("span")

    let time = document.createElement("span")
    time.id = "time"
    time.innerText = "now"

    clock.appendChild(time)

    postheader.appendChild(name)
    postheader.appendChild(followers)
    postheader.appendChild(clock)

    info.appendChild(postheader)

    information.appendChild(userimg)
    information.appendChild(info)
    article.appendChild(information)

    let del = document.createElement("div")
    del.id = "follow"
    del.classList.add("col")
    del.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" id="delIcon" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
    </svg>
    `

    let com = document.createElement("p")
    com.innerText = commentcontent.value
    com.id = "finalcom"

    article.appendChild(del)
    post.appendChild(article)
    post.appendChild(com)
    commentsblock.insertBefore(post, commentsblock.firstChild)

    del.onclick = function(){
        commentsblock.removeChild(post)
        coNo.innerText = +(coNo.innerText) - 1
    }
}

let blog = function(){

    let sec = document.createElement("section")

    let post = document.createElement("div")
    post.id = "post"
    post.style.marginTop = "10px"

    let article = document.createElement("div")
    article.id = "article"
    article.classList.add("row")

    let information = document.createElement("div")
    information.id = "information"
    information.classList.add("col")

    let userimg = document.createElement("div")
    userimg.id = "userimg"
    userimg.style.marginRight = "3px"

    userimg.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="${user.getAttribute("fill")}" style="background-color:${user.style.backgroundColor};" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
    </svg>`

    let info = document.createElement("div")
    info.id = "info"

    let postheader = document.createElement("div")

    let name = document.createElement("span")
    name.id = "name"
    name.innerText = proname.innerText

    let followers = document.createElement("span")
    followers.id = "followers"
    followers.innerText = "5294 followers"

    let clock = document.createElement("span")

    let time = document.createElement("span")
    time.id = "time"
    time.innerText = "now"

    let dot = document.createElement("span")
    dot.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
    </svg>`

    let globe = document.createElement("span")
    globe.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
    </svg>`

    clock.appendChild(time)
    clock.appendChild(dot)
    clock.appendChild(globe)

    postheader.appendChild(name)
    postheader.appendChild(followers)
    postheader.appendChild(clock)

    info.appendChild(postheader)

    information.appendChild(userimg)
    information.appendChild(info)
    article.appendChild(information)

    let follow = document.createElement("div")
    follow.id = "follow"
    follow.classList.add("col")

    let more = document.createElement("button")
    more.id = "tthreedots"

    more.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
    </svg>
    `
    follow.appendChild(more)
    article.appendChild(follow)
    post.appendChild(article)

    let topic = document.createElement("p")
    topic.id = "topic"
    topic.innerText = inptopic.value

    post.appendChild(topic)

    let card = document.createElement("div")
    card.classList.add("card")

    let photo = document.createElement("img")
    photo.src = img.value
    photo.setAttribute("height", "300px")
    photo.classList.add("card-img-top")

    let cardbody = document.createElement("div")
    cardbody.classList.add("card-body")

    let h6 = document.createElement("h6")
    h6.classList.add("card-title")
    h6.innerText = description.value

    let source = document.createElement("p")
    source.innerText = inpsource.value

    cardbody.appendChild(h6)
    cardbody.appendChild(source)

    card.appendChild(photo)
    card.appendChild(cardbody)
    post.appendChild(card)

    let underimg = document.createElement("div")
    underimg.classList.add("row")
    underimg.id = "reacted"

    let dthreedots = document.createElement("div")
    dthreedots.id = "dthreedots"
    dthreedots.classList.add("col")

    dthreedots.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#0070BB" class="bi bi-three-dots" viewBox="0 0 16 16">
    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
    </svg>`

    let num = document.createElement("span")
    num.innerText = "0"
    dthreedots.appendChild(num)

    let comments = document.createElement("div")
    comments.id = "comments"             
    comments.classList.add("col")

    let comNo = document.createElement("button")
    comNo.innerText = " comments"
    comNo.id = "displaycomment"

    let number = document.createElement("span")
    number.innerText = "0"
    comNo.insertBefore(number, comNo.firstChild)
    comments.appendChild(comNo)

    underimg.appendChild(dthreedots)
    underimg.appendChild(comments)
    post.appendChild(underimg)

    let commentblock = document.createElement("div")
    commentblock.id = "commentsblock"
    post.appendChild(commentblock)
    commentblock.style.marginBottom = "10px"

    let addcommentarea = document.createElement("div")
    addcommentarea.id = "addcommentarea"

    let text = document.createElement("div")

    let commentcontent = document.createElement("textarea")
    commentcontent.id = "commentcontent"
    commentcontent.setAttribute("cols", "66")
    commentcontent.setAttribute("rows", "5")
    commentcontent.setAttribute("placeholder", "Comment")
    text.appendChild(commentcontent)
    addcommentarea.appendChild(text)

    let btns = document.createElement("div")
    btns.id = "btns"
    btns.classList.add("row")

    let cancel = document.createElement("div")
    cancel.classList.add("col")

    let cancelbtn = document.createElement("button")
    cancelbtn.id = "cancelcomment"
    cancelbtn.innerText = "Cancel"
    cancel.appendChild(cancelbtn)
    btns.appendChild(cancel)

    let addcom = document.createElement("div")
    addcom.classList.add("col")

    let addcombtn = document.createElement("button")
    addcombtn.id = "addcommentbtn"
    addcombtn.innerText = "Add Comment"
    addcom.appendChild(addcombtn)
    btns.appendChild(addcom)
    addcommentarea.appendChild(btns)
    post.appendChild(addcommentarea)

    let postfooter = document.createElement("div")
    postfooter.classList.add("row")

    let hr = document.createElement("hr")
    hr.setAttribute("width", "93%")
    hr.style.margin = "10" 
    hr.style.marginTop = "1px"
    hr.style.marginBottom = "10px"
    postfooter.appendChild(hr)

    let reaction = document.createElement("div")
    reaction.id = "reaction"
    reaction.classList.add("col-10")

    let like = document.createElement("button")
    like.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
    </svg> Like`

    let comment = document.createElement("button")
    comment.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
    </svg> Comment`

    let share = document.createElement("button")
    share.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
    </svg> Share`
    reaction.appendChild(like)
    reaction.appendChild(comment)
    reaction.appendChild(share)
    postfooter.appendChild(reaction)

    let trash = document.createElement("div")
    trash.style.display = "inline"
    trash.id = "delete"
    trash.classList.add("col")
    trash.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" id="delIcon" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
    </svg>`
    postfooter.appendChild(trash)
    post.appendChild(postfooter)
    sec.appendChild(post)
    blogs.appendChild(sec)

    let addcomment = function(){
        let post = document.createElement("div")
        post.id = "post"
        post.style.marginTop = "10px"
        post.style.border = "1px solid"
        post.style.padding = "5px"
        post.style.borderRadius = "10px"
    
        let article = document.createElement("div")
        article.id = "article"
        article.classList.add("row")
    
        let information = document.createElement("div")
        information.id = "information"
        information.classList.add("col")
    
        let userimg = document.createElement("div")
        userimg.id = "userimg"
        userimg.style.marginRight = "3px"
    
        userimg.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="${user.getAttribute("fill")}" style="background-color:${user.style.backgroundColor};" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>`
    
        let info = document.createElement("div")
        info.id = "info"
    
        let postheader = document.createElement("div")
    
        let name = document.createElement("span")
        name.id = "name"
        name.innerText = proname.innerText
        name.style.display = "block"
    
        let followers = document.createElement("span")
        followers.id = "followers"
        followers.innerText = "5294 followers"
    
        let clock = document.createElement("span")
    
        let time = document.createElement("span")
        time.id = "time"
        time.innerText = "now"
    
        clock.appendChild(time)
    
        postheader.appendChild(name)
        postheader.appendChild(followers)
        postheader.appendChild(clock)
    
        info.appendChild(postheader)
    
        information.appendChild(userimg)
        information.appendChild(info)
        article.appendChild(information)
    
        let del = document.createElement("div")
        del.id = "follow"
        del.classList.add("col")
        del.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" id="delIcon" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
        </svg>
        `
    
        let com = document.createElement("p")
        com.innerText = commentcontent.value
        com.id = "finalcom"
    
        article.appendChild(del)
        post.appendChild(article)
        post.appendChild(com)
        commentblock.insertBefore(post, commentblock.firstChild)
    
        del.onclick = function(){
            commentblock.removeChild(post)
            number.innerText = +(number.innerText) - 1
        }
    }

    trash.onclick = function(){
        blogs.removeChild(sec)
    }

    like.onclick = function(){
        like.toggleAttribute("liked")
        if (like.hasAttribute("liked")){
            like.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#03C03C" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                  </svg> Liked`
            like.style.color = "#03C03C"
        } else{
            like.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                  </svg> Like`
            like.style.color = "#414a4cd1"
        }
    }
    
    share.onclick = function(){
        share.toggleAttribute("shared")
        if (share.hasAttribute("shared")){
            share.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#03C03C" class="bi bi-share-fill" viewBox="0 0 16 16">
                                   <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                                   </svg> Shared`
            share.style.color = "#03C03C"
        } else{
            share.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                                   <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                                   </svg> Share`
            share.style.color = "#414a4cd1"
        }
    }

    comment.onclick = function(){
        postfooter.style.display = "none"
        addcommentarea.style.display = "block"
        commentcontent.focus()
    }
    
    cancelbtn.onclick = function(){
        postfooter.style.display = "flex"
        addcommentarea.style.display = "none"
        commentcontent.value = ""
    }
    
    addcombtn.onclick = function(){
        if (commentcontent.value != ""){
            addcomment()
            number.innerText = +(number.innerText) + 1
            commentcontent.value = ""
            postfooter.style.display = "flex"
            addcommentarea.style.display = "none"
        }
    }
    
    comNo.onclick = function(){
        commentblock.toggleAttribute("displayed")
        if (commentblock.hasAttribute("displayed")){
            commentblock.style.display = "block"
        }else{
            commentblock.style.display = "none"
        }
    }
}

followblogger.onclick = function(){
    followblogger.toggleAttribute("followed")
    if (followblogger.hasAttribute("followed")){
        followblogger.style.color = "#03C03C"
        followblogger.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
        </svg>Followed`
    }else{
        followblogger.style.color = "#0070BB"
        followblogger.innerHTML = "+Follow"
    }   
}

for(let i=0;i<=6;i++){
    let followperson = document.getElementsByClassName("followperson")[i]
    followperson.onclick = function(){
        followperson.toggleAttribute("followed")
        if (followperson.hasAttribute("followed")){
            followperson.style.color = "#03C03C"
            followperson.style.borderColor = "#03C03C"
            followperson.innerText = "Followed"
        }else{
            followperson.style.color = "#0070BB"
            followperson.style.borderColor = "#0070BB"
            followperson.innerText = "+Follow"
        }
    } 
}

seeall.onclick = function(){
    morepeople.toggleAttribute("show")
    if (morepeople.hasAttribute("show")){
        morepeople.style.display = "block"
        seeall.innerText = "See Less People"
    }else{
        morepeople.style.display = "none"
        seeall.innerText = "See All People"
    }
}

start.onclick = function(){
    inputs.style.display = "block"
    start.style.display = "none"
    inptopic.focus()
}

goback.onclick = function(){
    inputs.style.display = "none"
    start.style.display = "block"
}

addpost.onclick = function(){
    if (inptopic.value != "" && img.value != "" && description.value != ""){
        blog()
        inputs.style.display = "none";
        msg.style.display = "block"
        setTimeout(() => {
            inptopic.value = "";
            img.value = "" ;
            description.value = ""; 
            inpsource.value = "";
            start.style.display = "block";
            msg.style.display = "none";
        }, 2000)
    }
}

likepost.onclick = function(){
    likepost.toggleAttribute("liked")
    if (likepost.hasAttribute("liked")){
        likepost.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#03C03C" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                              </svg> Liked`
        likepost.style.color = "#03C03C"
    } else{
        likepost.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                              </svg> Like`
        likepost.style.color = "#414a4cd1"
    }
}

sharepost.onclick = function(){
    sharepost.toggleAttribute("shared")
    if (sharepost.hasAttribute("shared")){
        sharepost.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#03C03C" class="bi bi-share-fill" viewBox="0 0 16 16">
                               <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                               </svg> Shared`
        sharepost.style.color = "#03C03C"
    } else{
        sharepost.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                               <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                               </svg> Share`
        sharepost.style.color = "#414a4cd1"
    }
}

commentpost.onclick = function(){
    reactions.style.display = "none"
    commentarea.style.display = "block"
    commentcontent.focus()
}

cancelcomment.onclick = function(){
    reactions.style.display = "block"
    commentarea.style.display = "none"
    commentcontent.value = ""
}

addcommentbtn.onclick = function(){
    if (commentcontent.value != ""){
        addcomments()
        coNo.innerText = +(coNo.innerText) + 1
        commentcontent.value = ""
        reactions.style.display = "block"
        commentarea.style.display = "none"
    }
}

displaycomments.onclick = function(){
    commentsblock.toggleAttribute("displayed")
    if (commentsblock.hasAttribute("displayed")){
        commentsblock.style.display = "block"
    }else{
        commentsblock.style.display = "none"
    }
}