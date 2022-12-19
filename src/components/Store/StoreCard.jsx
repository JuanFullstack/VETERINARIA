import './css/StoreCard.css';
import imgDefault from './img/images.png';
import { MdAddShoppingCart } from "react-icons/md";
import TodaContendio from '../../hooks/TodaContendio';
import { useState, useEffect } from 'react';


export default function GalleyCard({ item }) {

    const { agregarcarrito } = TodaContendio()
    const [cantidad, setCantidad] = useState(0)
    // Funcion que llama al sweetalert con la info de la Card
    const handleClick = (params) => {


        const guitarraSleccionada = {
            id: params.id,
            imagen: params.url,
            nombre: params.name,
            precio: (parseFloat((params.price).replace('$', ''))),
            cantidad
        }

        agregarcarrito(guitarraSleccionada)
        console.log(guitarraSleccionada)

    }


    const handleCantClick = (oper, cant) => {
        const maxsale = 10
        const minsale = 0
        console.log(oper, cant);
        if (oper === '+' && cant < maxsale) {
            setCantidad(cant + 1)
        }
        if (oper === '-' && cant > minsale) {
            setCantidad(cant - 1)
        }
    }

    return (
        <div className="card card_w">
            <img src={item.url} className="configimg" alt={item.name} />
            <div className="cardbody cardtitleh">
                <h5 className="cardtitle">{item.name}</h5>
                <h5 className="cardtitle fwbolder">{((item.price))}</h5>
            </div>
            <div className="card-body">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary text-black button-cant" onClick={() => { handleCantClick('-', cantidad) }}>-</button>
                    <input className='input-cant' type="text" readOnly value={cantidad} />
                    <button type="button" className="btn btn-secondary text-black button-cant" onClick={() => { handleCantClick('+', cantidad) }}>+</button>
                </div>
                <button className='btn btn-success text-white'
                    onClick={() => {
                        handleClick(item)
                    }}>
                    <MdAddShoppingCart size={'2em'}></MdAddShoppingCart>Agregar
                </button>
            </div>
        </div>
    );
};