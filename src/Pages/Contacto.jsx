import styled from "styled-components";
import { useState, useEffect } from "react";
import Error from "../components/Error";
import TodaContendio from "../hooks/TodaContendio";

function Contacto() {
  

  return (
    <>
      <EstilosDiv>
      <button class="custom-btn btn-14"><span>Click!</span></button>

      <button class="custom-btn btn-15"><span>Click!</span></button>

      </EstilosDiv>
    </>
  );
}

export default Contacto;

const EstilosDiv = styled.div`
display: flex;
 padding: 15rem;
 gap:4rem;
 align-items: center;
 justify-content:center;
 padding-top:8rem;



 .custom-btn {
  width: 300px;
  height: 150px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

.btn-14 {
  background: rgb(255,151,0);
  border: none;
  z-index: 1;
}
.btn-14:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: #eaf818;
  background-image: linear-gradient(315deg, #eaf818 0%, #f6fc9c 74%);
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5)
   7px 7px 20px 0px rgba(0,0,0,.1)
   4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;
}
.btn-14:hover {
  color: #000;
}
.btn-14:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}
.btn-14:active {
  top: 2px;
}


//bt 15

.btn-15 {
  background: #0060ce;
  border: none;
  z-index: 1;
}
.btn-15:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: #1d56f0;
  background-image: linear-gradient(315deg, #99f8f0 0%, #08f5d5 74%);
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5)
   7px 7px 20px 0px rgba(0,0,0,.1)
   4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;
}
.btn-15:hover {
  color: #000;
}
.btn-15:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}
.btn-15:active {
  top: 2px;
}



`;
