
export default function Mascotas({ perros }) {
  return (
    <section>
      <div className="container-sm container-md container-lg container-xl">
        <div className="row">
          {perros.map((item, i) => (
            <div key={i} className="col-xs-12 col-md-6 col-lg-4 mb-4 Articulo" id={"articulo-"+item.id}>
              <div className="card rounded">
                <img src={item.image} alt="Perros" className="imagen-card" />
                <div className="card-body">
                  <p className="card-title text-uppercase">{item.category}</p>
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <hr />
                  <div className="card-text">
                    <p>{item.intro}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
