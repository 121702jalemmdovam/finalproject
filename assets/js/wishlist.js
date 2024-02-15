const proWishlist=document.getElementById('proWishlist')
function getproduct(){
    proWishlist.innerHTML=''
    let wishlist= JSON.parse(localStorage.getItem('wishlist'))||[]
    wishlist.map((item,index)=>{
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
        <span><strong>Price:</strong> ${item.price} </span>
        <div class="btnDiv">
        <button class="onebutton" onclick="removefromcart(${index})">Remove From Wishlist <i class="fa-solid fa-trash"></i></button> <br>
        <button class="twobutton" onclick="addtobasket(${item.id})">Add to Basket <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        </div>
        </div>
        </div>
        `
        proWishlist.appendChild(box)
    })
}
getproduct()
function addtobasket(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const productItem = wishlist.find(item => item.id == id);
    
    if(productItem){
        let cartItem = cart.find(item => item.id == id);
        if(cartItem){
            cartItem.count = (cartItem.count || 1) + 1;
        } else {
            cart.push({...productItem, count: 1});
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Product added to cart:', productItem.title);
    } else {
        console.error('The product was not found in the favorites list.');
    }
}
function removefromcart(index) {
let wishlist= JSON.parse(localStorage.getItem('wishlist'))||[]
wishlist.splice(index,1)
localStorage.setItem('wishlist',JSON.stringify(wishlist))
getproduct()
}
function getproducttwo(){
    proWishlist.innerHTML=''
    let wishlist= JSON.parse(localStorage.getItem('wishlist'))||[]
    wishlist.map((item,index)=>{
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
        <p class="title"><strong>Author:</strong> ${item.title}</p>
        <span><strong>Price:</strong> ${item.price} </span>
        <div class="btnDiv">
        <button class="onebutton" onclick="removefromcart2(${index})">Remove From Wishlist <i class="fa-solid fa-trash"></i></button> <br>
        <button class="twobutton" onclick="addtobasket(${item.id})">Add to Basket<i class="fa-solid fa-cart-shopping"></i> </button>
        </div>
        </div>
        </div>
        </div>
        `
        proWishlist.appendChild(box)
    })
}
getproducttwo()
function removefromcart2(index) {
let wishlist= JSON.parse(localStorage.getItem('wishlist'))||[]
wishlist.splice(index,1)
localStorage.setItem('cart',JSON.stringify(wishlist))
getproducttwo()
}

function getproductthree(){
    proWishlist.innerHTML=''
    let wishlist= JSON.parse(localStorage.getItem('wishlist'))||[]
    wishlist.map((item,index)=>{
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
        <div class="txt">
        <h5><strong>NAME:</strong> ${item.name}</h5>
        <p class="title"><strong>Author:</strong> ${item.title}</p>
        <span><strong>Price:</strong> ${item.price} </span>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="removefromcart3(${index})">Remove From Wishlist  <i class="fa-solid fa-trash"></i></button> <br>
        <button class="twobutton" onclick="addtobasket(${item.id})">Add to Basket</button>
        </div>
        </div>
        </div>
        </div>
        `
        proWishlist.appendChild(box)
    })
}
getproductthree()
function removefromcart3(index) {
let wishlist= JSON.parse(localStorage.getItem('wishlist'))||[]
wishlist.splice(index,1)
localStorage.setItem('wishlist',JSON.stringify(wishlist))
getproductthree()
}


const productList=document.getElementById('productList')
limit=16
page=1
function getproducts(){
    productList.innerHTML=''
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
        <button class="onebutton" onclick="addtobasket6(${item.id})"><i class="fa-solid fa-basket-shopping"></i></button>
        <button class="twobutton" onclick="addtowishlist6(${item.id})"><i class="fa-solid fa-heart"></i></button>    
        <a href="./detailpage.html"><button class="onebutton" onclick="detail6(${item.id})"><i class="fa-solid fa-eye"></i></button><br></a>
        </div>
        </div>
        `
        productList.appendChild(box)
    })
    })
}
getproducts()
function addtobasket6(id) {
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
function addtowishlist6(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find(item => item.id == id)
    
    if(productItem){
        alert('This product has already become a favorite')
    } else {
        wishlist.push(products.find(item => item.id == id)) 
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }

}
function detail6(id) {
    localStorage.removeItem('cart');

    const cart = [products.find(item => item.id == id)];
    
    localStorage.setItem('cart', JSON.stringify(cart));
}