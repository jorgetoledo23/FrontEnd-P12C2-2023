export default function Card( { titulo, desc, importante} ) {
    const estilos = {
        main : {
            backgroundColor : importante ? "red" : "green",
            borderRadius : "10px",
            padding : "5px",
            margin : "20px",
            color : "#fff",
            textAlign : "center"
        },
        titulo : {
            fontSize : "2rem"
        },
        desc : {}
        
    }

    return <div style={estilos.main}>
        <h3 style={estilos.titulo}>{titulo}</h3>
        <p>{desc}</p>
    </div>
}
