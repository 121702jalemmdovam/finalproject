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
        <a href="./detailpage.html"><button onclick="detail(${item.id})">Read More  <i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        </div>
        `
        blog.appendChild(box)
    })
    })
}
getblog()
function detail(id) {
    // Yeni ürünü sepete eklemek için önceki verileri temizle
    localStorage.removeItem('cart');

    // Yeni ürünü sepete ekle
    const cart = [products.find(item => item.id == id)];
    
    // Güncellenmiş sepet verilerini localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(cart));
}
const blogtwo = document.getElementById('blogtwo');

function getblog2() {
    blogtwo.innerHTML = '';
    const limit = 4;

    axios.get(`https://65c6142be5b94dfca2e0e8ad.mockapi.io/blog`)
        .then(res => {
            const products = res.data;
            let count = 0;
            for (let i = 0; i < products.length; i++) {
                const item = products[i];
                if (item.id > 4 && count < limit) {
                    const box = document.createElement('div');
                    box.className = 'boxDiv col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12';
                    box.innerHTML = `
                        <div class="proDiv">
                            <img src="${item.image}" alt="">
                            <div class="textDiv">
                                <h4>${item.name}</h4>
                                <p>${item.title}</p>
                            </div>
                            <div class="btnDiv">
                                <a href="./detailpage.html"><button onclick="detail2(${item.id})">Read More  <i class="fa-solid fa-arrow-right"></i></button></a>
                            </div>
                        </div>
                    `;
                    blogtwo.appendChild(box);
                    count++;
                }
            }
        })
        .catch(error => {
            console.error('Blog gönderisi alınırken bir hata oluştu:', error);
        });
}

getblog2();

function detail2(id) {
    // Yeni ürünü sepete eklemek için önceki verileri temizle
    localStorage.removeItem('cart');

    // Yeni ürünü sepete ekle
    const cart = [products.find(item => item.id == id)];
    
    // Güncellenmiş sepet verilerini localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(cart));
}


