const numeros = [
    1,
    2,
    3,
    4,
    5
]

numeros.forEach(num => {
    const div = document.createElement('div')
    div.classList.add('card', 'text-center', 'fs-5', 'col-3', 'm-2')
    div.innerHTML = '<strong>' + num + '</strong>'

    const btn = document.createElement('button')
    btn.classList.add('btn', 'btn-primary', 'col-6', 'mx-auto', 'm-2')
    btn.innerHTML = '<i class="fa-solid fa-circle-plus"></i>'

    btn.addEventListener('click', () => {

            const item = document.createElement('div')
            item.classList.add('text-center', 'col-3', 'card')
            item.innerHTML = '<strong>' + num + '</strong>'
            item.id = num
            // item.style.maxHeight = "80px"

            const p = document.createElement('p')
            p.innerHTML = 1

            const btn = document.createElement('button')
            btn.classList.add('btn', 'btn-danger', 'col-6', 'mx-auto', 'm-2')
            btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'

            // Funcionalidad para eliminar elemento de la Canasta
            btn.addEventListener('click', () => {
                document.getElementById('canasta').removeChild(item)
            })

            item.appendChild(p)
            item.appendChild(btn)
            document.getElementById('canasta').appendChild(item)

        


    })

    div.appendChild(btn)
    document.body.appendChild(div)
    // Agregar un Button
    // Agregar Evento al Button

})


// function add(num){
//     canasta.push(num)
//     recargarCanasta()
// }

// function recargarCanasta(){
//     const container = document.getElementById('canasta')
//     container.innerHTML = ''
//     canasta.forEach(num => {
//         const div = document.createElement('div')
//         div.classList.add('card', 'text-center', 'fs-5', 'col-3', 'm-2')
//         div.innerHTML = '<strong>'+ num +'</strong>'
//         container.appendChild(div)
//     })
// }
