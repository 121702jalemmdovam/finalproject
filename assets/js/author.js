
const author=document.getElementById('author')
function getproduct(){
    author.innerHTML=''
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/basket`)
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
        <a href="./authordetail.html"><button onclick="authordetail2(${item.id})">Read More <i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        </div>
        `
        author.appendChild(box)
    })
    })
}
getproduct()
function authordetail2(id) {
    localStorage.removeItem('author');

    const author = [products.find(item => item.id == id)];
    
    localStorage.setItem('author', JSON.stringify(author));
}
const filterdata = document.getElementById('filterdata')
function filterdatadefault(){
    author.innerHTML = ''
    let selectvalue = filterdata.value;
    if(selectvalue === '1'){
        axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/basket`)
        .then(res=>{
            products = res.data
            products.map(item=>{
                const box = document.createElement('div')
                box.className='boxDiv col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'
        box.innerHTML=`
        <div class="proDiv">
        <img src="${item.image}" alt="">
        <div class="textDiv">
        <h5>${item.name}</h5>
        <p>${item.title}</p>
        </div>
        <div class="btnDiv">
        <a href="./authordetail.html"><button onclick="authordetail2(${item.id})">Read More <i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        </div>
        `
                author.appendChild(box)
            })
        })
    }
    }
filterdata.addEventListener('change',filterdatadefault)
function filterdataaz(){
    author.innerHTML = ''
    let selectvalue = filterdata.value;
    if(selectvalue === '2'){
        axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/basket`)
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
        <h5>${item.name}</h5>
        <p>${item.title}</p>
        </div>
        <div class="btnDiv">
        <a href="./authordetail.html"><button onclick="authordetail2(${item.id})">Read More <i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        </div>
        `
                author.appendChild(box)
            })
        })
    }
    }
filterdata.addEventListener('change',filterdataaz)

function filterdataza(){
    author.innerHTML = ''
    let selectvalue = filterdata.value;
    if(selectvalue === '3'){
        axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/basket`)
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
                <h5>${item.name}</h5>
                <p>${item.title}</p>
                </div>
                <div class="btnDiv">
                <a href="./authordetail.html"><button onclick="authordetail2(${item.id})">Read More <i class="fa-solid fa-arrow-right"></i></button></a>
                </div>
                </div>
                `
                author.appendChild(box)
            })
        })
    }
    }
filterdata.addEventListener('change',filterdataza)
const searchform = document.getElementById('searchform')
const searchinput = document.getElementById('searchinput')
function searchbyname(e){
    e.preventDefault()
    author.innerHTML = ''
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/basket`)
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
        <h5>${item.name}</h5>
        <p>${item.title}</p>
        </div>
        <div class="btnDiv">
        <a href="./authordetail.html"><button onclick="authordetail2(${item.id})">Read More <i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        </div>
        `
                author.appendChild(box)
            })
            searchinput.value = ''
        })
    }
    
searchform.addEventListener('submit',searchbyname)
