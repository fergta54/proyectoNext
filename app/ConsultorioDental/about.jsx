import about from "./img/about.jpg";
import Header from "./header";
import Image from 'next/image'

function About() {
  return (
    <div>
      <header>
        <h1 className="site-heading text-center text-faded d-none d-lg-block">
          <span className="site-heading-upper text-primary mb-3">UNIVALLE</span>
          <span className="site-heading-lower">Sobre nosotros</span>
        </h1>
      </header>
      <Header></Header>
      <section className="page-section about-heading">
        <div className="container">
          <Image
            className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
            src={about}
            alt="..."
          />

          <div className="about-heading-content">
            <div className="row">
              <div className="col-xl-9 col-lg-10 mx-auto">
                <div
                  className="bg-faded rounded p-5"
                  style={{ backgroundColor: "#f7eaef" }}
                >
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">Sobre la</span>
                    <span className="section-heading-lower">
                      clínica odontológica
                    </span>
                  </h2>
                  <p>
                    Todos sus profesionales desarrollan servicios en una
                    excelente infraestructura, con la tecnología adecuada para
                    atención en salud oral.
                  </p>
                  <p className="mb-0">
                    Uno de los principales objetivos de la Clínica Odontológica
                    UNIVALLE es, sin duda, el apoyo para los estudiantes de la
                    Carrera de Odontología con el fin de optimizar el Proceso de
                    Enseñanza Aprendizaje que permite la formación de Excelencia
                    de los estudiantes del Ciclo Pre-clínico, Clínico e
                    Internado, corroborando la teoría con la práctica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="footer text-faded text-center py-5"
        style={{ backgroundColor: "#440d20" }}
      >
        <div className="container">
          <p className="m-0 small">Copyright &copy; Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
