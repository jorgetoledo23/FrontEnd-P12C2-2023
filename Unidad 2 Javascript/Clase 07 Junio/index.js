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

let TOTAL = 0

const btnOpenCart = document.getElementById('btnOpenCart')
const carroContainer = document.getElementById('carroContainer')
const carroProductContainer = document.getElementById('carroProductContainer')

btnOpenCart.addEventListener('click', ()=>{
    if(carroContainer.style.height == "90vh"){
        carroContainer.style.height = "0vh"
        carroProductContainer.style.display = "none"
    }else{
        carroContainer.style.height = "90vh"
        carroProductContainer.style.display = "block"
    }
})

const updateTotal = (total) =>{
    const spanTotal = document.getElementById('spanTotal')
    spanTotal.innerText = toCLP.format(total)
}



const productContainer = document.getElementById('productContainer')

const addToCart = (P) =>{
    TOTAL = TOTAL + P.Precio
    updateTotal(TOTAL)

    //Mostrar Alerta

    const exists = document.getElementById(P.Cod) // HTMLnode || null

    if(exists == null){
        //Producto NO existe en el Carro
        const divProductoCarro = document.createElement('div')
        divProductoCarro.classList.add('card', 'text-center', 'p-2', 'm-2')
        divProductoCarro.id = P.Cod
        
        const descProductoCarro = document.createElement('p')
        descProductoCarro.classList.add('card-title')
        descProductoCarro.innerText = P.Descripcion
    
        const imgProductoCarro = document.createElement('img')
        imgProductoCarro.src = P.UrlImagen
        imgProductoCarro.classList.add('d-block', 'mx-auto', 'm-2')
        imgProductoCarro.width = "150"
        imgProductoCarro.height = "150"
    
        const cantidadProductCarro = document.createElement('p')
        cantidadProductCarro.innerText = "Cantidad: "
    
        const cantidad = document.createElement('span')
        cantidad.innerText = 1
        cantidadProductCarro.appendChild(cantidad)
    
        const precioProductoCarro = document.createElement('p')
        precioProductoCarro.classList.add('card-title', 'm-2', 'p-2')
        precioProductoCarro.innerHTML = '<strong>' + toCLP.format(P.Precio) + '</strong>'

        const btnEliminar = document.createElement('button')
        btnEliminar.classList.add('btnEliminar', 'btn')
        btnEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>'
        btnEliminar.addEventListener('click', () =>{
            
            const subTotal = cantidad.innerText
            TOTAL = TOTAL - (P.Precio * parseInt(subTotal))
            updateTotal(TOTAL)
            
            carroProductContainer.removeChild(divProductoCarro)

            
        })

    
        divProductoCarro.appendChild(descProductoCarro)
        divProductoCarro.appendChild(imgProductoCarro)
        divProductoCarro.appendChild(precioProductoCarro)
        divProductoCarro.appendChild(cantidadProductCarro)
        divProductoCarro.appendChild(btnEliminar)
        
    
        carroProductContainer.appendChild(divProductoCarro)

    }else{
        //Producto YA existe en el Carro
        const spanCantidad = exists.getElementsByTagName('p')[2].childNodes[1]
        spanCantidad.innerText = parseInt(spanCantidad.innerText) + 1

        const subTotal = P.Precio * parseInt(spanCantidad.innerText)
        const parrafoSubTotal = exists.getElementsByTagName('p')[1]
        parrafoSubTotal.innerText = toCLP.format(subTotal)
    }


   

}

const loadProducts = () =>{

    products.forEach(P => {
    
        const divProducto = document.createElement('div')
        divProducto.classList.add('card', 'text-center', 'p-2', 'col-md-3')
   
        
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

        btnProducto.addEventListener('click', () =>{
            addToCart(P)
        })




        divProducto.appendChild(descProducto)
        divProducto.appendChild(imgProducto)
        divProducto.appendChild(precioProducto)
        divProducto.appendChild(btnProducto)

        productContainer.appendChild(divProducto)
    })

}

loadProducts()

