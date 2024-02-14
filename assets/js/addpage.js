
const btnAZ = document.getElementById('btnAZ')
const btnZA = document.getElementById('btnZA')
const yenile = document.getElementById('default')
const Myform = document.getElementById('Myform')
const exampleName = document.getElementById('exampleName')
const exampleTitle = document.getElementById('exampleTitle')
const exampleImage= document.getElementById('exampleImage')
const exampleInputPassword1 = document.getElementById('examplePrice')
const tableDiv = document.getElementById('tableDiv')

//Search By Name

const searchdata = document.getElementById('searchdata');
const inp = document.getElementById('inp');

function searchbyname(e) {
    e.preventDefault();
    tableDiv.innerHTML = '';
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
        .then(res => {
            db = res.data;
            let searchproducts = db.filter((item) => item.title.toLowerCase().startsWith(inp.value.toLowerCase()));
            searchproducts.map(item => {
                const box = document.createElement('tr');
                box.className = 'myBox';
                box.innerHTML = `
                    <td><img src="${item.image}" alt=""></td>
                    <td><p>${item.title}</p></td>
                    <td><p>${item.price}</p></td>
                    <td><button onclick="removefromadd(${item.id})">Remove</button></td>
                `;
                tableDiv.appendChild(box);
            });
            inp.value = '';
        });
}

searchdata.addEventListener('submit', searchbyname);


//Post Form

function postForm(e) {
    e.preventDefault()
    axios.post('https://65680f199927836bd97406d3.mockapi.io/username/products',{
        name: exampleName.value,
        title:exampleTitle.value,
        price:examplePrice.value,
        image:exampleImage.value,
    })
    Myform.reset()
    setTimeout(()=>{
        getForm()
    },1000)
}
Myform.addEventListener('submit',postForm)

//Get Form

function getForm() {
    tableDiv.innerHTML = ''
    axios.get('https://65680f199927836bd97406d3.mockapi.io/username/products')
    .then(res =>{
        db = res.data
        db.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><p>${item.title}</p></td>
            <td><p>$${item.price}</p></td>
            <td><button style="background-color: #007A5C; color: white; border: none; width: 60px; height: 30px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}
getForm()

//Delete Form

function deleteFromForm(id) {
    tableDiv.innerHTML = ''
    axios.delete(`https://65680f199927836bd97406d3.mockapi.io/username/products/${id}`)
    setTimeout(()=>{
        getForm()
    },1000)
}

//Sort A-Z

function sortAZ() {
    tableDiv.innerHTML = ''
    axios.get('https://65680f199927836bd97406d3.mockapi.io/username/products')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => a.title.localeCompare(b.title))
        sortData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><p>${item.title}</p></td>
            <td><p>$${item.price}</p></td>
            <td><button style="background-color: #007A5C; color: white; border: none; width: 60px; height: 30px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}
btnAZ.addEventListener('click',sortAZ)

//Sort Z-A

function sortZA() {
    tableDiv.innerHTML = ''
    axios.get('https://65680f199927836bd97406d3.mockapi.io/username/products')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => b.title.localeCompare(a.title))
        sortData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><p>${item.title}</p></td>
            <td><p>$${item.price}</p></td>
            <td><button style="background-color: #007A5C; color: white; border: none; width: 60px; height: 30px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}

btnZA.addEventListener('click',sortZA)

//Default

yenile.addEventListener('click',getForm)