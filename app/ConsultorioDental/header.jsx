import Link from 'next/link';

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark py-lg-4"
        style={{ backgroundColor: '#762d3d' }}
      >
        <div className="container">
          <a
            className="navbar-brand text-uppercase fw-bold d-lg-none"
            href="index.html"
          >
            Clínica Odontológica
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-lg-4">
                <Link
                  className="nav-link text-uppercase"
                  href="/ConsultorioDental"
                >
                  Clinica Dental
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  className="nav-link text-uppercase"
                  href="/ConsultorioDental/about"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  className="nav-link text-uppercase"
                  href="/ConsultorioDental/services"
                >
                  Servicios
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" href="./Horarios">
                  Horarios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
