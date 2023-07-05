export default function Navbar({fToggleCarro}) {
    return <nav className="navbar bg-warning">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">React</span>
            <button onClick={ () => { fToggleCarro()  }}
             className="btn btn-primary">
                <i className="bi bi-cart-fill"></i>
            </button>
        </div>
    </nav>
};
