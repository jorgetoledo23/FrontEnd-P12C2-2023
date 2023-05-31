const root = document.getElementById('root')

const frutas = ["Manzana", "Pera", "Cereza"]
const autos = ["Mazda", "Ferrari", "Kia"]
const personas = [
                    {
                        "Id": "1",
                        "Descripcion": "Teclado Logitech"
                    },
                    {
                        "Rut":"2-2",
                        "Nombre": "Steve"
                    }
                ]

const items = [1,2,3,4] //array
personas.forEach(item => {
    const p = document.createElement("p")
    p.innerText = item.Nombre
    root.appendChild(p)
})


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


