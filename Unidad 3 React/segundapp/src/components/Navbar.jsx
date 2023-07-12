export default function Navbar( { fCambiarContador } ) {
    return <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">Clase Front End 12-07</span>
      <div>
        <button className="btn btn-warning mx-1">
            <i onClick={ ()=>{ fCambiarContador("Disminuir") }} 
            className="bi bi-dash-circle"></i></button>
        <button className="btn btn-warning mx-1">
            <i onClick={ ()=>{ fCambiarContador("Aumentar") }} 
            className="bi bi-plus-circle"></i></button>
      </div>
    </div>
  </nav>
};
