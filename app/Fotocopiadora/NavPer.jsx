import Link from 'next/link';
export function NavPer()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav" style={{ backgroundColor: '#762d3d' }}>
        <div className="container">
          <Link className="navbar-brand text-uppercase fw-bold d-lg-none" href="/#inicio">Fotocopiadora</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" href="/#inicio">Inicio</Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" href="/#nosotros">Sobre nosotros</Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" href="/#servicios">Servicios</Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" href="/#horario">Horarios</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}