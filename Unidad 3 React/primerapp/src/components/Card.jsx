export default function Card( { titulo, desc} ) {
    
    const estilos = {
        backgroundColor : "green",
        borderRadius : "10px",
        padding : "5px",
        margin : "20px",
        color : "#fff",
        textAlign : "center"
    }
    
    
    return <div style={estilos}>
        <h3>{titulo}</h3>
        <p>{desc}</p>
    </div>
}
