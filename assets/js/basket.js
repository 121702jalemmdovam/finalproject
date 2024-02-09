const proBasket=document.getElementById('proBasket')
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
        <span><strong>Price:</strong> ${item.price} Manat</span>
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
        <span><strong>Price:</strong> ${item.price} Manat</span>
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
        <span>${item.price} Manat</span>
        </div>
        <div class="btnDiv">
        <button class="onebutton" onclick="detailpage(${item.id})"><i class="fa-solid fa-eye"></i></button><br>
        </div>
        </div>
        `
        proList.appendChild(box)
    })
    })
}
getproducts()