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
        <a href="/author.html"><button>Come Back</button></a>
        </div>
        </div>
        </div>
        `
        authorprodetail.appendChild(box)
    })
}
getproduct2()

