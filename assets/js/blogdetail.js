const blogdetails=document.getElementById('blogdetails')
function getblogs(){
    blogdetails.innerHTML=''
    let cart= JSON.parse(localStorage.getItem('cart'))||[]
    cart.map((item,)=>{
        const box= document.createElement('div')
        box.className='boxDiv row';
        box.innerHTML=`
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="images">
        <img style="width: 800px;" src="${item.image}" alt="">
         </div>
        </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="textDiv">
        <h5> ${item.name}</h5>
        <p class="title">${item.title}</p>
        <p class="description">${item.description}</p>
        <a href="/blog.html"><button><i class="fa-solid fa-arrow-left"></i>  Come Back</button></a>
        </div>
        </div>
        </div>
        `
        blogdetails.appendChild(box)
    })
}
getblogs()

const problog=document.getElementById('problog')
function getproduct3(){
    problog.innerHTML=''
    axios.get(`https://65c6142be5b94dfca2e0e8ad.mockapi.io/blog`)
    .then(res=>{
    products=res.data
    products.map(item=>{
        const box= document.createElement('div')
        box.className='boxDiv col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'
        box.innerHTML=`
        <div class="proDiv">
        <img src="${item.image}" alt="">
        <div class="textDiv">
        <h5>${item.name}</h5>
        <p>${item.title}</p>
        </div>
        <div class="btnDiv">
        <a href="./blogdetail.html"><button onclick="blogdetail(${item.id})">Read More <i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        </div>
        `
        problog.appendChild(box);
    }); 
    
    })
}
getproduct3()

function blogdetail(id) {
    // Yeni ürünü sepete eklemek için önceki verileri temizle
    localStorage.removeItem('cart');

    // Yeni ürünü sepete ekle
    const cart = [products.find(item => item.id == id)];
    
    // Güncellenmiş sepet verilerini localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(cart));
}


const chatWindow = document.getElementById('chat-window');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
let comments = [];

// Yerel depolama kullanarak verileri al
const storedComments = localStorage.getItem('comments');
if (storedComments) {
    comments = JSON.parse(storedComments);
    displayComments();
}

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function sendMessage() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    if (name !== '' && email !== '' && message !== '') {
        const currentDate = new Date().toLocaleDateString();
        const comment = { 
            id: generateUniqueId(), 
            name, 
            email,
            message,
            date: currentDate,
            likes: 0, 
            likedBy: [],
            replies: [] 
        };
        comments.push(comment);
        saveComments();
        displayComments();
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}

function displayComments() {
    chatWindow.innerHTML = '';
    comments.forEach((comment, commentIndex) => {
        const commentElement = document.createElement('div');
        commentElement.className='comment'
        commentElement.innerHTML = `
            <div class="one">
            <strong>${comment.name}</strong> 
            <span>${comment.date}<span>
            <p>${comment.message}</p>
            </div>
            <div class="three">
            <div class="two">
            <button class="likes" onclick="likeComment(${commentIndex})"><i class="fa-regular fa-heart"></i></button> 
            <p class="like">${comment.likes}</p>
            </div>
            <button class="edit" onclick="editComment(${commentIndex})">Edit</button>
            <button onclick="deleteComment(${commentIndex})">Delete</button> <br>
            <button onclick="replyToComment(${commentIndex})">Reply</button>
            </div>
            <div  id="replies-${comment.id}"></div>
        `;
        chatWindow.appendChild(commentElement);

        comment.replies.forEach((reply, replyIndex) => {
            const replyElement = document.createElement('div');
            replyElement.className='reply'
            replyElement.innerHTML = `
                <div class="one">
                <strong>${reply.name}</strong> 
                <span>${reply.date}</span>
                <p>${reply.message}</p>
                </div>
                <div class="threee">
                <div class="twoo"
                <button style="margin-top:40px;" class="liked" onclick="likeReply(${commentIndex}, ${replyIndex})"><i class="fa-regular fa-heart"></i></button>
                <p  class="likedd">${reply.likes}</p>
                </div>
                <button onclick="editReply(${commentIndex}, ${replyIndex})">Edit</button><br>
                <button onclick="deleteReply(${commentIndex}, ${replyIndex})">Delete</button><br>
                <button onclick="replyToReply(${commentIndex}, ${replyIndex})">Reply</button>
                </div>
                `;
            document.getElementById(`replies-${comment.id}`).appendChild(replyElement);
        });
    });
}

function likeComment(commentIndex) {
    comments[commentIndex].likes++;
    saveComments();
    displayComments();
}

function likeReply(commentIndex, replyIndex) {
    comments[commentIndex].replies[replyIndex].likes++;
    saveComments();
    displayComments();
}

function editComment(commentIndex) {
    const newText = prompt('Edit your comment:', comments[commentIndex].message);
    if (newText !== null) {
        comments[commentIndex].message = newText;
        saveComments();
        displayComments();
    }
}

function editReply(commentIndex, replyIndex) {
    const newText = prompt('Edit your reply:', comments[commentIndex].replies[replyIndex].message);
    if (newText !== null) {
        comments[commentIndex].replies[replyIndex].message = newText;
        saveComments();
        displayComments();
    }
}

function deleteComment(commentIndex) {
    if (confirm("Are you sure you want to delete this comment?")) {
        comments.splice(commentIndex, 1);
        saveComments();
        displayComments();
    }
}

function deleteReply(commentIndex, replyIndex) {
    if (confirm("Are you sure you want to delete this reply?")) {
        comments[commentIndex].replies.splice(replyIndex, 1);
        saveComments();
        displayComments();
    }
}

function replyToComment(commentIndex) {
    const name = prompt('Enter your name:');
    const reply = prompt('Enter your reply:');
    if (name && reply) {
        const currentDate = new Date().toLocaleDateString();
        const newReply = { 
            name, 
            message: reply, 
            date: currentDate, 
            likes: 0, 
            replies: [] 
        };
        comments[commentIndex].replies.push(newReply);
        saveComments();
        displayComments();
    }
}

function replyToReply(commentIndex, replyIndex) {
    const name = prompt('Enter your name:');
    const reply = prompt('Enter your reply:');
    if (name && reply) {
        const currentDate = new Date().toLocaleDateString();
        const newReply = { 
            name, 
            message: reply, 
            date: currentDate, 
            likes: 0 
        };
        comments[commentIndex].replies[replyIndex].replies.push(newReply);
        saveComments();
        displayComments();
    }
}
