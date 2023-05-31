const numeros = [1,2,3,4,5]

numeros.forEach( num => {
    const div = document.createElement('div')
    div.classList.add('card', 'text-center', 'fs-5', 'col-3', 'm-2')
    div.innerHTML = '<strong>'+ num +'</strong>'
    
    const btn = document.createElement('button')
    btn.classList.add('btn', 'btn-danger', 'col-6' ,'mx-auto', 'm-2')
    btn.innerHTML = '<i class="fa-solid fa-circle-plus"></i>'
    
    btn.addEventListener('click', ()=>{
        alert(num)
    })

    div.appendChild(btn)
    document.body.appendChild(div)
    //Agregar un Button
    //Agregar Evento al Button

})