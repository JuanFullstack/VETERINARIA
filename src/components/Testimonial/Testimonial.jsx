import React, { useState } from "react";
import "./estilos.css";
import img1 from "./imagenes/img1.jpg";
const Testimonial = () => {
  return (
    <div className="contenedor">
      <div className="container">
        <div className=" titulo  my-5">
          <h1 className="text-center text-white text-uppercase">Tesimonios</h1>
        </div>

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
        
            <div className="carousel-item active">
            <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card text-center">
                    <img className="card-img-top" src={img1} />

                    <div className="card-body">
                      <h4>
                        Rone Galle <br />
                        <span>Project Manager</span>
                      </h4>
                      <p className="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Officia illum perspiciatis laboriosam obcaecati
                        molestiae architecto.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div className="card text-center">
                    <img className="card-img-top" src={img1} />

                    <div className="card-body">
                      <h4>
                        Rone Galle <br />
                        <span>Project Manager</span>
                      </h4>
                      <p className="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Officia illum perspiciatis laboriosam obcaecati
                        molestiae architecto.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div className="card text-center">
                    <img className="card-img-top" src={img1} />

                    <div className="card-body">
                      <h4>
                        Rone Galle <br />
                        <span>Project Manager</span>
                      </h4>
                      <p className="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Officia illum perspiciatis laboriosam obcaecati
                        molestiae architecto.
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
