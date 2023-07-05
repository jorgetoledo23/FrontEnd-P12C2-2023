export default function Product({Producto}) {
    const toCLP = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })

    
    return <div className="card col-md-3" >
    <img width={200} src={Producto.UrlImagen} className="d-block mx-auto" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{Producto.Desc}</h5>
      <p className="card-text">{toCLP.format(Producto.Precio)}</p>
      <p className="card-text">{Producto.Stock}</p>
      <button  className="btn btn-primary">Add</button>
    </div>
  </div>

};
