import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data.json'
import Product from './components/Product';
import Carro from './components/Carro';
import { useState } from 'react';

export default function App() {
  
  const [visible, setVisible] = useState(false)

  const fToggleCarro = () =>{
    setVisible(!visible)
  }
  
  return (
    <div id="divPadre" >
      <Navbar fToggleCarro={fToggleCarro} />
      <Carro visible={visible} />

      <div className='row justify-content-evenly m-5'>
      {data.map(P => <Product key={P.Cod} Producto={P} />)}
      </div>
      


    </div>
  );
}
