import './css/StoreCard.css';
import imgDefault from './img/images.png';
import { MdAddShoppingCart } from "react-icons/md";
import TodaContendio from '../../hooks/TodaContendio';
import  { useState, useEffect } from 'react';


export default function GalleyCard({item}) {
 
    const { agregarcarrito  } = TodaContendio()
    const [cantidad , setcantidad] = useState(0)
    // Funcion que llama al sweetalert con la info de la Card
    const handleClick = (params) => {

        
        const guitarraSleccionada = {
            id: params.id,
            imagen: params.url,
            nombre : params.name,
            precio: (parseFloat((params.price).replace('$',''))),
            cantidad
        }

        agregarcarrito(guitarraSleccionada)
        console.log( guitarraSleccionada)

    }

    return (
        <div className="card card_w">
            <img src={item.url} className="configimg" alt={item.name} />
            <div className="cardbody cardtitleh">
                <h5 className="cardtitle">{item.name}</h5>
                <h5 className="cardtitle fwbolder">{((item.price))}</h5>
            </div>
            <div className="card-body">
                <div  className='cantidad' >
                 <label htmlFor='cantidad'>Cantidad : </label>
                  <select  
                  onChange={e=> setcantidad(parseInt(e.target.value))}
                  id='cantidad'
                  className='opcion'
                  >
                      
                      <option   value='1'> 1 </option>
                      <option value='2'> 2 </option>
                      <option value='3'> 3 </option>
                      <option  value='4'> 4 </option>
                      <option  value='5'> 5 </option>
                  </select>
               </div>
                <button className=' btnsuccess'
                    onClick={() => {
                        handleClick(item)
                    }}>   
                    <p className='agregar'> Agregar</p>
                </button>
            </div>
        </div>
    );
};