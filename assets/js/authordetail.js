const authorprodetail=document.getElementById('authorprodetail')
function getproduct2(){
    authorprodetail.innerHTML=''
    let author= JSON.parse(localStorage.getItem('author'))||[]
    author.map((item,)=>{
        const box= document.createElement('div')
        box.className='boxDiv row';
        box.innerHTML=`
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="images">
        <img src="${item.image}" alt="">
        </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="textDiv">
        <h5><strong>Name:</strong> ${item.name}</h5>
        <p class="title"><strong>Number of Books:</strong> ${item.title}</p>
        <p class="description"><strong>Description:</strong> ${item.description}</p>
        <a href="/author.html"><button><i class="fa-solid fa-arrow-left"></i>  Come Back</button></a>
        </div>
        </div>
        </div>
        `
        authorprodetail.appendChild(box)
    })
}
getproduct2()


const authorsdetailsitem=document.getElementById('authorsdetailsitem')
let limit=8
 let page=1
function getproduct3(){
    authorsdetailsitem.innerHTML=''
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/basket?page=${page}&limit=${limit}`)
    .then(res=>{
    products=res.data
    products.map(item=>{
        const box= document.createElement('div')
        box.className='boxDiv col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'
        box.innerHTML=`
        <div class="proDiv">
        <img src="${item.image}" alt="">
        <div class="textDiv">
        <h5>${item.name}</h5>
        <p>${item.title}</p>
        </div>
        <div class="btnDiv">
        <a href="./authordetail.html"><button onclick="authordetail3(${item.id})">Read More <i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        </div>
        `
        authorsdetailsitem.appendChild(box);
    }); 
    page++
    })
}
getproduct3()

function authordetail3(id) {
    // Yeni ürünü sepete eklemek için önceki verileri temizle
    localStorage.removeItem('author');

    // Yeni ürünü sepete ekle
    const author = [products.find(item => item.id == id)];
    
    // Güncellenmiş sepet verilerini localStorage'a kaydet
    localStorage.setItem('author', JSON.stringify(author));
}


