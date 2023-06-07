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
    },
]

const productContainer = document.getElementById('productContainer')

const loadProducts = () =>{

    products.forEach(P => {
    
        const divProducto = document.createElement('div')
        divProducto.classList.add('card', 'text-center', 'p-2', 'm-2')
        divProducto.id = P.Cod
        divProducto.innerText = P.Cod


        productContainer.appendChild(divProducto)
    })

}

loadProducts()

