const blogdetails=document.getElementById('blogdetails')
function getblogs(){
    blogdetails.innerHTML=''
    let cart= JSON.parse(localStorage.getItem('cart'))||[]
    cart.map((item,)=>{
        const box= document.createElement('div')
        box.className='boxDiv row';
        box.innerHTML=`
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="images">
        <img src="${item.image}" alt="">
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
const bookInput = document.getElementById('book');
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
    const book = bookInput.value.trim();
    const message = messageInput.value.trim();
    if (name !== '' && book !== '' && message !== '') {
        const comment = { 
            id: generateUniqueId(), 
            name, 
            book, 
            message, 
            likes: 0, 
            likedBy: [],
            replies: [] 
        };
        comments.push(comment);
        saveComments();
        displayComments();
        nameInput.value = '';
        bookInput.value = '';
        messageInput.value = '';
    }
}

function displayComments() {
    chatWindow.innerHTML = '';
    comments.forEach((comment, commentIndex) => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
            <strong>${comment.name}</strong> kitap <strong>${comment.book}</strong> hakkında şunu yazdı: <br>
            <span id="comment-${comment.id}-text">${comment.message}</span><br>
            <button onclick="likeComment(${commentIndex})">Beğen</button> <span id="comment-${comment.id}-likes">${comment.likes}</span><br>
            <button onclick="editComment(${commentIndex})">Yorumu Düzenle</button><br>
            <button onclick="deleteComment(${commentIndex})">Yorumu Sil</button><br>
            <button onclick="replyToComment(${commentIndex})">Yanıtla</button>
        `;
        chatWindow.appendChild(commentElement);

        comment.replies.forEach((reply, replyIndex) => {
            const replyElement = document.createElement('div');
            replyElement.innerHTML = `
                <em>${reply.name}</em>: <span id="reply-${reply.id}-text">${reply.message}</span><br>
                <button onclick="likeReply(${commentIndex}, ${replyIndex})">Beğen</button> <span id="reply-${reply.id}-likes">${reply.likes}</span><br>
                <button onclick="editReply(${commentIndex}, ${replyIndex})">Yanıtı Düzenle</button>
                <button onclick="deleteReply(${commentIndex}, ${replyIndex})">Yanıtı Sil</button>
                <button onclick="replyToReply(${commentIndex}, ${replyIndex})">Yanıtı Yanıtla</button>
            `;
            commentElement.appendChild(replyElement);
        });
    });
    chatWindow.scrollTop = chatWindow.scrollHeight; 
}

function likeComment(commentIndex) {
    const comment = comments[commentIndex];
    if (!comment.likedBy.includes("You")) {
        comment.likes++;
        comment.likedBy.push("You");
        saveComments();
        displayComments();
    }
}

function likeReply(commentIndex, replyIndex) {
    const reply = comments[commentIndex].replies[replyIndex];
    if (!reply.likedBy.includes("You")) {
        reply.likes++;
        reply.likedBy.push("You");
        saveComments();
        displayComments();
    }
}

function editComment(commentIndex) {
    const newText = prompt('Yorumunuzu düzenleyin:', comments[commentIndex].message);
    if (newText !== null) {
        comments[commentIndex].message = newText;
        saveComments();
        displayComments();
    }
}

function editReply(commentIndex, replyIndex) {
    const newText = prompt('Yanıtınızı düzenleyin:', comments[commentIndex].replies[replyIndex].message);
    if (newText !== null) {
        comments[commentIndex].replies[replyIndex].message = newText;
        saveComments();
        displayComments();
    }
}

function replyToComment(commentIndex) {
    const name = prompt('Adınızı girin:');
    const reply = prompt('Yanıtınızı girin:');
    if (name && reply) {
        const newReply = { name, message: reply, id: generateUniqueId(), likes: 0, likedBy: [], replies: [] };
        comments[commentIndex].replies.push(newReply);
        saveComments();
        displayComments();
    }
}

function replyToReply(commentIndex, replyIndex) {
    const name = prompt('Adınızı girin:');
    const reply = prompt('Yanıtınızı girin:');
    if (name && reply) {
        const newReply = { name, message: reply, id: generateUniqueId(), likes: 0, likedBy: [] };
        comments[commentIndex].replies[replyIndex].replies.push(newReply);
        saveComments();
        displayComments();
    }
}

function deleteComment(commentIndex) {
    if (confirm("Yorumu silmek istediğinize emin misiniz?")) {
        comments.splice(commentIndex, 1);
        saveComments();
        displayComments();
    }
}

function deleteReply(commentIndex, replyIndex) {
    if (confirm("Yanıtı silmek istediğinize emin misiniz?")) {
        comments[commentIndex].replies.splice(replyIndex, 1);
        saveComments();
        displayComments();
    }
}
