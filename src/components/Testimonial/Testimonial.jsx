import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import CarrouselItem from "./CarrouselItem";
import Testimony from "./Testimony";

export default function Testimonial() {
  const [testimony, setTestimony] = useState([]);

  useEffect(() => {
    async function fetchTestimony() {
      const resp = await fetch(`http://localhost:3004/testimony`)
      const json = await resp.json()
      setTestimony(json)
    }

    fetchTestimony()
  }, [])

  return (
    <div className="testimonial-area">
      <div>
        {testimony.map(item => {
          return (
            <CarrouselItem key={item.id} props={item} />
          )
        })}
      </div>
      <div className="carousel-inner">
        {testimony.map(item => {
          return (
            <Testimony key={item.id} props={item} />
          )
        })}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};