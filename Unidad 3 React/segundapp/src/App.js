import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

  const [contador, setContador] = useState(0)
  const [usuarios, setUsuarios] = useState([])

  const fAddUsuario = (email, pass, check) => {
    let newUsuario = {
      email : email,
      pass : pass,
      check : check
    }
    let newArray = [...usuarios, newUsuario]
    setUsuarios(newArray)
  }

  const fCambiarContador = (Accion) => { 
    if (Accion === "Aumentar"){
      let num = contador + 1
      setContador(num)
    }
    if (Accion === "Disminuir"){
      let num = contador - 1
      setContador(num)
    }
  }

  const estilos = {
    main : {
      textAlign : 'center',
      fontSize : '45px',
      width : '150px',
      height : '150px',
      margin : 'auto',
      borderRadius : '100%',
      borderSize : '1px',
      borderStyle : 'solid',
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
    }
  }

  return (
    <div>
      <Navbar fCambiarContador={fCambiarContador} />
      <div style={estilos.main}>
        { contador }
      </div>
      <div className="row justify-content-center">
        <Form fAddUsuario={fAddUsuario} />
      </div>
      <div>
        {usuarios.map(U => <div className="card m-2 p-2 shadow" 
        style={{ backgroundColor : U.check ? 'green': '#ff7f50'}}>
          <p>Email : {U.email}</p>
          <p>Pass : {U.pass}</p>
        </div>)}
      </div>
      
    </div>
  );
}

export default App;
