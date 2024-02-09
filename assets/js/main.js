
const prolist=document.getElementById('prolist')
limit=4
page=1
function getproduct(){
    prolist.innerHTML=''
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products?page=${page}&limit=${limit}`)
    .then(res=>{
    products=res.data
    products.map(item=>{
        const box= document.createElement('div')
        box.className='boxDiv col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'
        box.innerHTML=`
        <div class="proDiv">
        <img src="${item.image}" alt="">
        <div class="textDiv">
        <h4>${item.name}</h4>
        <p>${item.title}</p>
        <span>${item.price} Manat</span>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="addtobasket(${item.id})"><i class="fa-solid fa-basket-shopping"></i></button>
        <button class="twobutton" onclick="addtowishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>    
        <a href="./detailpage.html"><button onclick="detail(${item.id})">Details</button></a>
        </div>
        </div>
        `
        prolist.appendChild(box)
    })
    })
}
getproduct()
function detail(id) {
    // Yeni ürünü sepete eklemek için önceki verileri temizle
    localStorage.removeItem('cart');

    // Yeni ürünü sepete ekle
    const cart = [products.find(item => item.id == id)];
    
    // Güncellenmiş sepet verilerini localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(cart));
}
function addtobasket(id) {
    let cart=JSON.parse(localStorage.getItem('cart')) || []
    let productItem = cart.find(item => item.id == id)

    if(productItem){
        productItem.count = (productItem.count || 1) + 1
    }else {
        cart.push(products.find(item => item.id == id))
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    
}
function addtowishlist(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find(item => item.id == id)
    
    if(productItem){
        alert('This product has already become a favorite')
    } else {
        wishlist.push(products.find(item => item.id == id)) 
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }

}
const product=document.getElementById('product')
limit=12
page=1
function getproducttwo(){
    product.innerHTML=''
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products?page=${page}&limit=${limit}`)
    .then(res=>{
    products=res.data
    products.map(item=>{
        const box= document.createElement('div')
        box.className='boxDiv col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12'
        box.innerHTML=`
        <div class="proDiv">
        <img src="${item.image}" alt="">
        <div class="textDiv">
        <h4>${item.name}</h4>
        <p>${item.title}</p>
        <span>${item.price} Manat</span>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="addtobasket2(${item.id})"><i class="fa-solid fa-basket-shopping"></i></button><br>
        <button class="twobutton" onclick="addtowishlist2(${item.id})"><i class="fa-solid fa-heart"></i></button>    
        <a href="./detailpage.html"><button onclick="detail2(${item.id})">Details</button></a>
        </div>
        </div>
        `
        product.appendChild(box)
    })
    })
}
getproducttwo()
function detail2(id) {
    // Yeni ürünü sepete eklemek için önceki verileri temizle
    localStorage.removeItem('cart');

    // Yeni ürünü sepete ekle
    const cart = [products.find(item => item.id == id)];
    
    // Güncellenmiş sepet verilerini localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(cart));
}
function addtobasket2(id) {
    let cart=JSON.parse(localStorage.getItem('cart')) || []
    let productItem = cart.find(item => item.id == id)

    if(productItem){
        productItem.count = (productItem.count || 1) + 1
    }else {
        cart.push(products.find(item => item.id == id))
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    
}
function addtowishlist2(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find(item => item.id == id)
    
    if(productItem){
        alert('This product has already become a favorite')
    } else {
        wishlist.push(products.find(item => item.id == id)) 
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }

}
const producttwo=document.getElementById('producttwo')
limit=4
page=1
function getproductthree(){
    producttwo.innerHTML=''
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products?page=${page}&limit=${limit}`)
    .then(res=>{
    products=res.data
    products.map(item=>{
        const box= document.createElement('div')
        box.className='boxDiv col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12'
        box.innerHTML=`
        <div class="proDiv">
        <img src="${item.image}" alt="">
        <div class="textDiv">
        <h4>${item.name}</h4>
        <p>${item.title}</p>
        <span>${item.price} Manat</span>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="addtobasket3(${item.id})"><i class="fa-solid fa-basket-shopping"></i></button><br>
        <button class="twobutton" onclick="addtowishlist3(${item.id})"><i class="fa-solid fa-heart"></i></button>    
        </div>
        </div>
        `
        producttwo.appendChild(box)
    })
    })
}
getproductthree()
function addtobasket3(id) {
    let cart=JSON.parse(localStorage.getItem('cart')) || []
    let productItem = cart.find(item => item.id == id)

    if(productItem){
        productItem.count = (productItem.count || 1) + 1
    }else {
        cart.push(products.find(item => item.id == id))
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    
}
function addtowishlist3(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find(item => item.id == id)
    
    if(productItem){
        alert('This product has already become a favorite')
    } else {
        wishlist.push(products.find(item => item.id == id)) 
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }

}
