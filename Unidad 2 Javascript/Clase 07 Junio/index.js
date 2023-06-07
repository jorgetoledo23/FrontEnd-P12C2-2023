const products = [
    {
        "Cod": "1",
        "Descripcion": "Nintendo Switch OLED White",
        "Precio": 199999,
        "UrlImagen": "https://media.solotodo.com/media/products/1473681_picture_1634002127.jpg"
    }, {
        "Cod": "2",
        "Descripcion": "PlayStation 5",
        "Precio": 489999,
        "UrlImagen": "https://media.solotodo.com/media/products/1182943_picture_1602146793.webp"
    }, {
        "Cod": "3",
        "Descripcion": "Lenovo IdeaPad Gaming 3 15IMH05",
        "Precio": 1234564,
        "UrlImagen": "https://media.solotodo.com/media/products/1228061_picture_1599591333.webp"
    },
    {
        "Cod": "4",
        "Descripcion": "Microsoft Xbox Series S",
        "Precio": 345678,
        "UrlImagen": "https://media.solotodo.com/media/products/1263786_picture_1604618116.jpg"
    }
]
const toCLP = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
})

const btnOpenCart = document.getElementById('btnOpenCart')
const carroContainer = document.getElementById('carroContainer')
btnOpenCart.addEventListener('click', ()=>{
    if(carroContainer.style.height == "90vh"){
        carroContainer.style.height = "0vh"
    }else{
        carroContainer.style.height = "90vh"
    }
})



const productContainer = document.getElementById('productContainer')

const loadProducts = () =>{

    products.forEach(P => {
    
        const divProducto = document.createElement('div')
        divProducto.classList.add('card', 'text-center', 'p-2', 'col-md-3')
        divProducto.id = P.Cod
        
        const descProducto = document.createElement('p')
        descProducto.classList.add('card-title')
        descProducto.innerText = P.Descripcion

        const imgProducto = document.createElement('img')
        imgProducto.src = P.UrlImagen
        imgProducto.classList.add('d-block', 'mx-auto', 'm-2')
        imgProducto.width = "150"
        imgProducto.height = "150"

        const precioProducto = document.createElement('p')
        precioProducto.classList.add('card-title', 'm-2', 'p-2')
        precioProducto.innerHTML = '<strong>' + toCLP.format(P.Precio) + '</strong>'

        const btnProducto = document.createElement('button')
        btnProducto.classList.add('btn', 'btn-primary', 'm-2', 'p-2', 'col-5', 'mx-auto')
        btnProducto.innerHTML = '<i class="fa-solid fa-cart-plus"></i>'




        divProducto.appendChild(descProducto)
        divProducto.appendChild(imgProducto)
        divProducto.appendChild(precioProducto)
        divProducto.appendChild(btnProducto)

        productContainer.appendChild(divProducto)
    })

}

loadProducts()

