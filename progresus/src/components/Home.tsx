function Home() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100"> {/* Centra el contenido */}
        <div className="container" style={{ maxWidth: "550px" }}> {/* Limita el ancho máximo */}
          <div className="row mb-3"> {/* Fila para las cards de arriba */}
            <div className="col-sm-6 mb-3"> {/* Card 1 */}
              <div className="card">
                <Link to="/OurServices">
                <img
                  src="/cobertizoMadera.png"
                  className="card-img-top"
                  alt="Cobertizo de madera"
                  />
                </Link>
                    <div className="card-body">
                    <h5 className="card-title">Nuestros servicios</h5>
                    
                    </div>
                
              </div>
            </div>
            <div className="col-sm-6 mb-3"> {/* Card 2 */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Preguntas frecuentes</h5>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="row"> {/* Fila para las cards de abajo */}
            <div className="col-sm-6 mb-3"> {/* Card 3 */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Galería</h5>
                  
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3"> {/* Card 4 */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Contacto</h5>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;