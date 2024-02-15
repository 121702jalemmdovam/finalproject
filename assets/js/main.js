
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
        <span>${item.price} </span>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="addtobasket(${item.id})"><i class="fa-solid fa-basket-shopping"></i></button>
        <button class="twobutton" onclick="addtowishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>    
        <a href="./detailpage.html"><button class="threebutton" onclick="detail(${item.id})"><i class="fa-solid fa-eye"></i></button></a>
        </div>
        </div>
        `
        prolist.appendChild(box)
    })
    })
}
getproduct()
function detail(id) {
    localStorage.removeItem('cart');

    const cart = [products.find(item => item.id == id)];
    
    localStorage.setItem('cart', JSON.stringify(cart));
}
function addtobasket (id) {
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
        <span>${item.price} </span>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="addtobasket2(${item.id})"><i class="fa-solid fa-basket-shopping"></i></button><br>
        <button class="twobutton" onclick="addtowishlist2(${item.id})"><i class="fa-solid fa-heart"></i></button>    
        <a href="./detailpage.html"><button class="threebutton" onclick="detail2(${item.id})"><i class="fa-solid fa-eye"></i></button></a>
        </div>
        </div>
        `
        product.appendChild(box)
    })
    })
}
getproducttwo()
function detail2(id) {
    localStorage.removeItem('cart');

    const cart = [products.find(item => item.id == id)];
    
    localStorage.setItem('cart', JSON.stringify(cart));
}
function addtobasket2(id) {
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
        <span>${item.price}</span>
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

const filterdata = document.getElementById('filterdata')
function filterdatadefault(){
    prolist.innerHTML = ''
    let selectvalue = filterdata.value;
    if(selectvalue === '1'){
        axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
        .then(res=>{
            products = res.data
            products.map(item=>{
                const box = document.createElement('div')
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
        <button class="onebutton" onclick="addtobasket(${item.id})"><i class="fa-solid fa-basket-shopping"></i></button>
        <button class="twobutton" onclick="addtowishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>    
        <a href="./detailpage.html"><button class="threebutton" onclick="detail(${item.id})"><i class="fa-solid fa-eye"></i></button></a>
        </div>
        </div>
        `
                prolist.appendChild(box)
            })
        })
    }
    }
filterdata.addEventListener('change',filterdatadefault)
function filterdataaz(){
    prolist.innerHTML = ''
    let selectvalue = filterdata.value;
    if(selectvalue === '2'){
        axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
        .then(res=>{
            products = res.data
            let azproducts = products.sort((a,b)=>a.name.localeCompare(b.name))
            azproducts.map(item=>{
                const box = document.createElement('div')
                box.className='boxDiv col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'
        box.innerHTML=`
        <div class="proDiv">
        <img src="${item.image}" alt="">
        <div class="textDiv">
        <h4>${item.name}</h4>
        <p>${item.title}</p>
        <span>${item.price}</span>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="addtobasket(${item.id})"><i class="fa-solid fa-basket-shopping"></i></button>
        <button class="twobutton" onclick="addtowishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>    
        <a href="./detailpage.html"><button class="threebutton" onclick="detail(${item.id})"><i class="fa-solid fa-eye"></i></button></a>
        </div>
        </div>
        `
                prolist.appendChild(box)
            })
        })
    }
    }
filterdata.addEventListener('change',filterdataaz)

function filterdataza(){
    prolist.innerHTML = ''
    let selectvalue = filterdata.value;
    if(selectvalue === '3'){
        axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
        .then(res=>{
            products = res.data
            let zaproducts = products.sort((a,b)=>b.name.localeCompare(a.name))
            zaproducts.map(item=>{
                const box = document.createElement('div')
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
        <button class="onebutton" onclick="addtobasket(${item.id})"><i class="fa-solid fa-basket-shopping"></i></button>
        <button class="twobutton" onclick="addtowishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>    
        <a href="./detailpage.html"><button class="threebutton" onclick="detail(${item.id})"><i class="fa-solid fa-eye"></i></button></a>
        </div>
        </div>
        `
                prolist.appendChild(box)
            })
        })
    }
    }
filterdata.addEventListener('change',filterdataza)
const searchform = document.getElementById('searchform')
const searchinput = document.getElementById('searchinput')
function searchbyname(e){
    e.preventDefault()
    prolist.innerHTML = ''
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
    .then(res=>{
            products = res.data
            let searchproducts = products.filter((item)=>item.name.toLowerCase().startsWith(searchinput.value.toLowerCase()));
            searchproducts.map(item=>{
                const box = document.createElement('div')
                box.className='boxDiv col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'
        box.innerHTML=`
        <div class="proDiv">
        <img src="${item.image}" alt="">
        <div class="textDiv">
        <h4>${item.name}</h4>
        <p>${item.title}</p>
        <span>${item.price}</span>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="addtobasket(${item.id})"><i class="fa-solid fa-basket-shopping"></i></button>
        <button class="twobutton" onclick="addtowishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>    
        <a href="./detailpage.html"><button class="threebutton" onclick="detail(${item.id})"><i class="fa-solid fa-eye"></i></button></a>
        </div>
        </div>
        `
                prolist.appendChild(box)
            })
            searchinput.value = ''
        })
    }
    
searchform.addEventListener('submit',searchbyname)
