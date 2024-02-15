const blog=document.getElementById ('blog')
limit=4
page=1
function getblog(){
    blog.innerHTML=''
    axios.get(`https://65c6142be5b94dfca2e0e8ad.mockapi.io/blog?page=${page}&limit=${limit}`)
    .then(res=>{
    products=res.data
    products.map(item=>{
        const box= document.createElement('div')
        box.className='boxDiv col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'
        box.innerHTML=`
        <div class="proDiv">
        <img src="${item.image}" alt="">
        <div class="textDiv">
        <h4>${item.name}</h4>
        <p>${item.title}</p>
        </div>
        <div class="btnDiv">
        <a href="./blogdetail.html"><button onclick="detail(${item.id})">Read More  <i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        </div>
        `
        blog.appendChild(box)
    })
    })
}
getblog()
function detail(id) {
    localStorage.removeItem('cart');

    const cart = [products.find(item => item.id == id)];
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

              
      
const blogtwo=document.getElementById ('blogtwo')
limit=4
page=1
function getblog2(){
    blogtwo.innerHTML=''
    axios.get(`https://65c6142be5b94dfca2e0e8ad.mockapi.io/blog2?page=${page}&limit=${limit}`)
    .then(res=>{
    products=res.data
    products.map(item=>{
        const box= document.createElement('div')
        box.className='boxDiv col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'
        box.innerHTML=`
        <div class="proDiv">
        <img src="${item.image}" alt="">
        <div class="textDiv">
        <h4>${item.name}</h4>
        <p>${item.title}</p>
        </div>
        <div class="btnDiv">
        <a href="./blogdetail.html"><button onclick="detail2(${item.id})">Read More  <i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        </div>
        `;
        blogtwo.appendChild(box)
    });
    })
}
getblog2()
function detail2(id) {
    localStorage.removeItem('cart');

    const cart = [products.find(item => item.id == id)];
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

              
      
