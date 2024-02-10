const proDetail=document.getElementById('proDetail')
function getproduct(){
    proDetail.innerHTML=''
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
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="textDiv">
        <h5><strong>NAME:</strong> ${item.name}</h5>
        <p class="title"><strong>Author:</strong> ${item.title} Manat</p>
        <p class="count"><strong>Count:</strong> ${item.count}</p>
        <span><strong>Price:</strong> ${item.price} Manat</span>
        <p class="description"><strong>Description:</strong> ${item.description} Manat</p>
        <div class="btnDiv">
        <button class="onebutton" onclick="addtobasket(${item.id})">Add to Basket</button>
        </div>
        </div>
        </div>
        </div>
        `
        proDetail.appendChild(box)
    })
}
getproduct()


const detailList=document.getElementById('detailList')
limit=16
page=1
function getproductss(){
    detailList.innerHTML=''
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
        </div>
        </div>
        `
        detailList.appendChild(box)
    })
    })
}
getproductss()
// function addtobasket(id) {
//     let cart=JSON.parse(localStorage.getItem('cart')) || []
//     let productItem = cart.find(item => item.id == id)

//     if(productItem){
//         productItem.count = (productItem.count || 1) + 1
//     }else {
//         cart.push(products.find(item => item.id == id))
//     }
//     localStorage.setItem('cart',JSON.stringify(cart))
    
// }
// function addtowishlist(id){
//     let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
//     let productItem = wishlist.find(item => item.id == id)
    
//     if(productItem){
//         alert('This product has already become a favorite')
//     } else {
//         wishlist.push(products.find(item => item.id == id)) 
//         localStorage.setItem('wishlist',JSON.stringify(wishlist))
//     }

// }