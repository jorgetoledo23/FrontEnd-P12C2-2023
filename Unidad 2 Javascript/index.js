console.log("Test")


const btnTest = document.getElementById('btnTest')
const btnAddSubTitle = document.getElementById('addSubtitle')
const btnAddList = document.getElementById("addList")
const body = document.getElementById("root")
//Si lo encuentra => retorna el HTML Element
//Sino => retorna null


// btnTest.addEventListener('click', () => {
//     let nuevoTitle = prompt("Ingresa nuevo Titulo:")
//     title.innerText = nuevoTitle
// })

btnTest.addEventListener("click", cambiarTitle)

function cambiarTitle() {
    let nuevoTitle = prompt("Ingresa nuevo Titulo:")
    const title = document.getElementById('title');
    title.innerText = nuevoTitle
    title.style.fontSize = "30px"
    title.style.color = "#333"
}

const cambiarTitle2 = () => {
    let nuevoTitle = prompt("Ingresa nuevo Titulo:")
    title.innerText = nuevoTitle
}

const addSubtitle = () => {
    subTitle = prompt("Ingresa Subtitulo")
    const p = document.createElement("p")
    p.innerText = subTitle
    body.appendChild(p)
}

const crearLista = () => {
    const lista = document.createElement("ul")
    lista.innerHTML = "<li class='item-list'>Elemento 1</li>"
                    +"<li>Elemento 2</li>"
                    +"<li>Elemento 3</li>"
    body.appendChild(lista)
}


btnAddSubTitle.addEventListener("click", addSubtitle)
btnAddList.addEventListener("click", crearLista)