import React, { useState, useEffect } from "react";
import "./estilos.css";
import vet1 from "./imagenes/vet1.jpg";

const Equipo = () => {
  useEffect(() => {
    window.AOS.init({
      // Initialization
      duration: 2000,
    });
  });

  return (
    <div className="contenedorSeccion">
      <div class="container" data-aos="fade-up">
        <div className="section-title p-5">
          <h2>Nuestro Equipo</h2>
          <p>
          Deseamos que siempre cuente con nosotros para el cuidado de su mascota. El equipo de nuestra consulta está formado por veterinarios y auxiliares de veterinaria con una excelente formación. Entre todos abarcamos un amplio espectro de conocimientos que nos permite aplicar en todo momento un tratamiento rápido y preciso que sea lo menos agresivo posible para su mascota.

 

          </p>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-team" data-aos="fade-up" data-aos-delay="200">
              <div class="img-area">
                <img
                  src={vet1}
                  class="img-responsive"
                  alt=""
                />
                <div class="social">
                  <ul class="list-inline">
                    <li>
                      <a href="#">
                      <i class="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <i class="fa-solid fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <i class="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="img-text">
                <h4>John Doe</h4>
                <h5>Web Designer</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-team" >
              <div class="img-area">
                <img
                  src="https://1.bp.blogspot.com/-cISC5xoywEA/YRleZqupHzI/AAAAAAAACZE/w7jfz6BTGf4IJv9kV-ijNP3kKxW3JpZXQCNcBGAsYHQ/s0/3%2B%25282%2529.jpg"
                  class="img-responsive"
                  alt=""
                />
                <div class="social">
                  <ul class="list-inline">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="img-text">
                <h4>Alex Wood</h4>
                <h5>Apps Developer</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-team" data-aos="fade-up" data-aos-delay="400">
              <div class="img-area">
                <img
                  src="https://1.bp.blogspot.com/-cGZY1xJjPNc/YRleZmEbEHI/AAAAAAAACZA/P-WOeYZegAQdUCF66C0E1ZF4zMEzaUvggCNcBGAsYHQ/s0/3%2B%25281%2529.jpg"
                  class="img-responsive"
                  alt=""
                />
                <div class="social">
                  <ul class="list-inline">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="img-text">
                <h4>Rosie Meg</h4>
                <h5>Game Developer</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-team" data-aos="fade-up" data-aos-delay="400">
              <div class="img-area">
                <img
                  src="https://1.bp.blogspot.com/-cGZY1xJjPNc/YRleZmEbEHI/AAAAAAAACZA/P-WOeYZegAQdUCF66C0E1ZF4zMEzaUvggCNcBGAsYHQ/s0/3%2B%25281%2529.jpg"
                  class="img-responsive"
                  alt=""
                />
                <div class="social">
                  <ul class="list-inline">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="img-text">
                <h4>Rosie Meg</h4>
                <h5>Game Developer</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-team" data-aos="fade-up" data-aos-delay="400">
              <div class="img-area">
                <img
                  src="https://1.bp.blogspot.com/-cGZY1xJjPNc/YRleZmEbEHI/AAAAAAAACZA/P-WOeYZegAQdUCF66C0E1ZF4zMEzaUvggCNcBGAsYHQ/s0/3%2B%25281%2529.jpg"
                  class="img-responsive"
                  alt=""
                />
                <div class="social">
                  <ul class="list-inline">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="img-text">
                <h4>Rosie Meg</h4>
                <h5>Game Developer</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-team" data-aos="fade-up" data-aos-delay="400">
              <div class="img-area">
                <img
                  src="https://1.bp.blogspot.com/-cGZY1xJjPNc/YRleZmEbEHI/AAAAAAAACZA/P-WOeYZegAQdUCF66C0E1ZF4zMEzaUvggCNcBGAsYHQ/s0/3%2B%25281%2529.jpg"
                  class="img-responsive"
                  alt=""
                />
                <div class="social">
                  <ul class="list-inline">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="img-text">
                <h4>Rosie Meg</h4>
                <h5>Game Developer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section></section>
    </div>
  );
};

export default Equipo;
