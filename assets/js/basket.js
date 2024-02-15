const proBasket=document.getElementById('proBasket')
const totalPriceDiv = document.getElementById('totalPrice');

function getproduct(){
    proBasket.innerHTML=''
    let cart= JSON.parse(localStorage.getItem('cart'))||[]
    cart.map((item,index)=>{
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
        <h5><strong>NAME:</strong> ${item.name}</h5>
        <p class="title"><strong>Author:</strong> ${item.title} </p>
        <p class="count"><strong>Count:</strong> ${item.count}</p> 
        <span><strong>Price:</strong> ${item.price}</span>
        <div class="js">
        <button class="remove" onclick="deleteFromCount(${index})">-</button>
        <button class="add" onclick="addToCount(${index})">+</button>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="removefromcart(${index})"><i class="fa-solid fa-trash"></i></button>
        </div>
       
        </div>
        </div>
        </div>
        `
        proBasket.appendChild(box)
    })
}
getproduct()
function removefromcart(index) {
let cart= JSON.parse(localStorage.getItem('cart'))||[]
cart.splice(index,1)
localStorage.setItem('cart',JSON.stringify(cart))
getproduct()
}
function deleteFromCount(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    if(cart[index].count > 1){
        cart[index].count -= 1
    }else{
        cart.splice(index,1)
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    getproduct()
}
function addToCount(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].count += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    getproduct();
}

function getproducttwo(){
    proBasket.innerHTML=''
    let cart= JSON.parse(localStorage.getItem('cart'))||[]
    cart.map((item,index)=>{
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
        <h5><strong>NAME:</strong> ${item.name}</h5>
        <p class="title"><strong>Author:</strong> ${item.title} Manat</p>
        <p class="count"><strong>Count:</strong> ${item.count}</p>
        <span><strong>Price:</strong> ${item.price} </span>
        <div class="js">
        <button class="remove" onclick="deleteFromCount2(${index})">-</button>
        <button class="add" onclick="addToCount2(${index})">+</button>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="removefromcart(${index})">Remove From Basket  <i class="fa-solid fa-trash"></i></button>
        </div>
      
        </div>
        </div>
        </div>
        `
        proBasket.appendChild(box)
    })
}
getproducttwo()
function removefromcart2(index) {
let cart= JSON.parse(localStorage.getItem('cart'))||[]
cart.splice(index,1)
localStorage.setItem('cart',JSON.stringify(cart))
getproducttwo()
}
function deleteFromCount2(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    if(cart[index].count > 1){
        cart[index].count -= 1
    }else{
        cart.splice(index,1)
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    getproducttwo()
}
function addToCount2(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].count += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    getproduct();
}

function getproductthree(){
    proBasket.innerHTML=''
    let cart= JSON.parse(localStorage.getItem('cart'))||[]
    cart.map((item,index)=>{
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
        <h5><strong>NAME:</strong> ${item.name}</h5>
        <p class="title"><strong>Author:</strong> ${item.title} </p>
        <p class="count"><strong>Count:</strong> ${item.count}</p>
        <span><strong>Price:</strong> ${item.price}</span>
        <div class="js">
        <button class="remove" onclick="deleteFromCount3(${index})">-</button>
        <button class="add" onclick="addToCount3(${index})">+</button>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="removefromcart(${index})">Remove From Basket  <i class="fa-solid fa-trash"></i></button>
        </div>
       
        </div>
        </div>
        </div>
        `
        proBasket.appendChild(box)
    })
}
getproductthree()
function removefromcart2(index) {
let cart= JSON.parse(localStorage.getItem('cart'))||[]
cart.splice(index,1)
localStorage.setItem('cart',JSON.stringify(cart))
getproductthree()
}
function deleteFromCount3(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    if(cart[index].count > 1){
        cart[index].count -= 1
    }else{
        cart.splice(index,1)
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    getproductthree()
}
function addToCount3(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].count += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    getproduct();
}

const proList=document.getElementById('proList')
limit=16
page=1
function getproducts(){
    proList.innerHTML=''
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
        <span>${item.price} </span>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="addtobasket7(${item.id})"><i class="fa-solid fa-basket-shopping"></i></button>
        <button class="twobutton" onclick="addtowishlist7(${item.id})"><i class="fa-solid fa-heart"></i></button>    
        <a href="./detailpage.html"><button class="onebutton" onclick="detail4(${item.id})"><i class="fa-solid fa-eye"></i></button><br>
        </a>
        </div>
        </div>
        `
        proList.appendChild(box)
    })
    })
}
getproducts()
function detail4(id) {
    localStorage.removeItem('cart');

    const cart = [products.find(item => item.id == id)];
    
    localStorage.setItem('cart', JSON.stringify(cart));
}
function addtobasket7(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let product = cart.find(item => item.id == id)

    if(product) {
        product.count = (product.count || 1) + 1
    }
    else {
        cart.push({... products.find(item => item.id == id), count : 1})
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}
function addtowishlist7(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find(item => item.id == id)
    
    if(productItem){
        alert('This product has already become a favorite')
    } else {
        wishlist.push(products.find(item => item.id == id)) 
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }

}