import Card from './components/Card'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <div id="divPadre" >
      <Navbar />
      <Card titulo="18.3.0" desc="Version Estable" importante={true}/>
      <Card titulo="20.3.1" desc="Version mas Nueva" importante={false}/>
    </div>
  );
}
